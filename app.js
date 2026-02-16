// Global data object
let awsData = {
    sections: []
};

// State Management
let state = {
    currentSection: null,
    currentQuestionIndex: 0,
    wrongAnswers: [],
    sectionProgress: {},
    followUpCorrect: 0,
    followUpQuestions: [],
    followUpIndex: 0,
    completedSections: [],
    pausedAtQuestion: null,  // Track where we paused the quiz
    needsRemediation: false  // Flag to know if we need to show doc + follow-up
};

// Validate section format
function validateSection(section) {
    if (!section || typeof section !== 'object') return false;
    
    const requiredFields = ['id', 'title', 'icon', 'description', 'questions', 'documentation', 'followUpQuestions'];
    for (const field of requiredFields) {
        if (!(field in section)) {
            console.warn(`Section missing required field: ${field}`);
            return false;
        }
    }
    
    // Validate questions array
    if (!Array.isArray(section.questions) || section.questions.length === 0) {
        console.warn(`Section ${section.id} has invalid questions array`);
        return false;
    }
    
    // Validate each question has required fields
    for (const question of section.questions) {
        if (!question.question || !Array.isArray(question.options) || 
            typeof question.correct !== 'number' || !question.explanation) {
            console.warn(`Invalid question in section ${section.id}`);
            return false;
        }
    }
    
    // Validate followUpQuestions
    if (!Array.isArray(section.followUpQuestions)) {
        console.warn(`Section ${section.id} has invalid followUpQuestions`);
        return false;
    }
    
    return true;
}

// Load all JSON files from the questions directory
async function loadQuestionData() {
    try {
        // Load the manifest file that lists all available JSON files
        const manifestResponse = await fetch('questions/manifest.json');
        if (!manifestResponse.ok) {
            throw new Error('Could not load questions/manifest.json. Run: node generate-manifest.js');
        }
        const manifest = await manifestResponse.json();
        const jsonFiles = manifest.files || [];
        
        if (jsonFiles.length === 0) {
            throw new Error('No question files listed in manifest.json');
        }
        
        // Load all JSON files in parallel
        const loadPromises = jsonFiles.map(async (filename) => {
            try {
                const response = await fetch(`questions/${filename}`);
                if (!response.ok) {
                    console.warn(`Failed to load ${filename}: ${response.status}`);
                    return null;
                }
                const section = await response.json();
                
                // Validate the section format
                if (validateSection(section)) {
                    return section;
                } else {
                    console.warn(`Invalid section format in ${filename}`);
                    return null;
                }
            } catch (error) {
                console.warn(`Error loading ${filename}:`, error);
                return null;
            }
        });
        
        const sections = await Promise.all(loadPromises);
        
        // Filter out null values and add to awsData
        awsData.sections = sections.filter(section => section !== null);
        
        if (awsData.sections.length === 0) {
            throw new Error('No valid question sections loaded');
        }
        
        console.log(`Loaded ${awsData.sections.length} question sections`);
        return true;
    } catch (error) {
        console.error('Error loading question data:', error);
        alert('Error loading quiz data. Please refresh the page.');
        return false;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    // Show loading state
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.innerHTML += '<p>Loading quiz data...</p>';
    }
    
    // Load question data from JSON files
    const loaded = await loadQuestionData();
    
    if (loaded) {
        loadProgress();
        renderSections();
        
        // Remove loading message
        if (welcomeScreen) {
            const loadingMsg = welcomeScreen.querySelector('p:last-child');
            if (loadingMsg && loadingMsg.textContent === 'Loading quiz data...') {
                loadingMsg.remove();
            }
        }
    }
});

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('awsPractitionerProgress', JSON.stringify(state));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('awsPractitionerProgress');
    if (saved) {
        const savedState = JSON.parse(saved);
        state.sectionProgress = savedState.sectionProgress || {};
        state.completedSections = savedState.completedSections || [];
    }
}

// Show a specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // Show progress bar except on welcome screen
    const progressContainer = document.getElementById('progress-container');
    if (screenId !== 'welcome-screen') {
        progressContainer.classList.add('visible');
        updateProgress();
    } else {
        progressContainer.classList.remove('visible');
    }
}

// Start learning journey
function startLearning() {
    showScreen('section-screen');
}

// Render section cards
function renderSections() {
    const container = document.getElementById('sections-container');
    container.innerHTML = '';
    
    awsData.sections.forEach(section => {
        const isCompleted = state.completedSections.includes(section.id);
        const card = document.createElement('div');
        card.className = `section-card ${isCompleted ? 'completed' : ''}`;
        card.onclick = () => startSection(section.id);
        
        card.innerHTML = `
            <div class="icon">${section.icon}</div>
            <h3>${section.title}</h3>
            <p>${section.description}</p>
            <span class="status">${isCompleted ? '✅' : ''}</span>
        `;
        
        container.appendChild(card);
    });
}

// Shuffle question options and update correct answer index
function shuffleQuestionOptions(question) {
    // Create array of [option, isCorrect] pairs
    const optionsWithCorrectFlag = question.options.map((option, index) => ({
        option: option,
        isCorrect: index === question.correct
    }));
    
    // Shuffle the options
    const shuffled = shuffleArray(optionsWithCorrectFlag);
    
    // Extract shuffled options and find new correct index
    const shuffledOptions = shuffled.map(item => item.option);
    const newCorrectIndex = shuffled.findIndex(item => item.isCorrect);
    
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
}

// Start a section
function startSection(sectionId) {
    const section = awsData.sections.find(s => s.id === sectionId);
    if (!section) return;
    
    // Create a shuffled copy of questions for this session
    const shuffledQuestions = shuffleArray([...section.questions]);
    
    // Shuffle options for each question
    const questionsWithShuffledOptions = shuffledQuestions.map(q => shuffleQuestionOptions(q));
    
    state.currentSection = {
        ...section,
        questions: questionsWithShuffledOptions
    };
    state.currentQuestionIndex = 0;
    state.wrongAnswers = [];
    
    showQuiz();
}

// Show quiz screen
function showQuiz() {
    const section = state.currentSection;
    document.getElementById('quiz-title').textContent = section.title;
    showScreen('quiz-screen');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const section = state.currentSection;
    const question = section.questions[state.currentQuestionIndex];
    
    document.getElementById('question-counter').textContent = 
        `Question ${state.currentQuestionIndex + 1} of ${section.questions.length}`;
    
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="answers">
            ${question.options.map((option, index) => `
                <button class="answer-btn" onclick="selectAnswer(${index})">${option}</button>
            `).join('')}
        </div>
        <div id="feedback"></div>
    `;
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const section = state.currentSection;
    const question = section.questions[state.currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const feedbackDiv = document.getElementById('feedback');
    
    // Disable all buttons
    answerButtons.forEach(btn => btn.disabled = true);
    
    // Check if answer is correct
    const isCorrect = selectedIndex === question.correct;
    
    // Highlight selected answer
    answerButtons[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    answerButtons[question.correct].classList.add('correct');
    
    // Show feedback
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
        <p>${question.explanation}</p>
    `;
    
    if (!isCorrect) {
        // Track this wrong answer
        if (!state.wrongAnswers.some(w => w.questionIndex === state.currentQuestionIndex)) {
            state.wrongAnswers.push({
                questionIndex: state.currentQuestionIndex,
                question: question
            });
        }
        
        // Show button to go to documentation
        const docButton = document.createElement('button');
        docButton.className = 'btn btn-primary next-btn';
        docButton.textContent = 'Study Documentation';
        docButton.onclick = () => {
            state.pausedAtQuestion = state.currentQuestionIndex;
            state.needsRemediation = true;
            showDocumentation();
        };
        feedbackDiv.appendChild(docButton);
    } else {
        // Correct answer - show next button
        const nextButton = document.createElement('button');
        nextButton.className = 'btn btn-primary next-btn';
        nextButton.textContent = state.currentQuestionIndex < section.questions.length - 1 
            ? 'Next Question' 
            : 'Complete Quiz';
        nextButton.onclick = nextQuestion;
        feedbackDiv.appendChild(nextButton);
    }
    
    saveProgress();
}

// Move to next question
function nextQuestion() {
    const section = state.currentSection;
    
    if (state.currentQuestionIndex < section.questions.length - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz completed - all correct!
        completeSection();
    }
}

// Show documentation
function showDocumentation() {
    const section = state.currentSection;
    
    document.getElementById('doc-title').textContent = `${section.title} - Study Guide`;
    document.getElementById('doc-content').innerHTML = section.documentation;
    
    showScreen('doc-screen');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Start follow-up questions
function startFollowUpQuestions() {
    const section = state.currentSection;
    
    // Shuffle follow-up questions and their options
    const shuffledQuestions = shuffleArray([...section.followUpQuestions]);
    state.followUpQuestions = shuffledQuestions.map(q => shuffleQuestionOptions(q));
    state.followUpIndex = 0;
    state.followUpCorrect = 0;
    
    showScreen('followup-screen');
    displayFollowUpQuestion();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Display follow-up question
function displayFollowUpQuestion() {
    const question = state.followUpQuestions[state.followUpIndex];
    
    document.getElementById('followup-counter').textContent = 
        `Correct: ${state.followUpCorrect} / 3`;
    
    const container = document.getElementById('followup-container');
    container.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="answers">
            ${question.options.map((option, index) => `
                <button class="answer-btn" onclick="selectFollowUpAnswer(${index})">${option}</button>
            `).join('')}
        </div>
        <div id="followup-feedback"></div>
    `;
}

// Handle follow-up answer selection
function selectFollowUpAnswer(selectedIndex) {
    const question = state.followUpQuestions[state.followUpIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const feedbackDiv = document.getElementById('followup-feedback');
    
    // Disable all buttons
    answerButtons.forEach(btn => btn.disabled = true);
    
    // Check if answer is correct
    const isCorrect = selectedIndex === question.correct;
    
    // Highlight selected answer
    answerButtons[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    answerButtons[question.correct].classList.add('correct');
    
    // Show feedback
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        state.followUpCorrect++;
        feedbackDiv.innerHTML = `
            <strong>✓ Correct!</strong>
            <p>Great job! ${state.followUpCorrect === 3 ? 'You\'ve answered all 3 correctly!' : `${3 - state.followUpCorrect} more to go!`}</p>
        `;
        
        // Check if completed
        if (state.followUpCorrect >= 3) {
            // Passed the follow-up quiz
            if (state.needsRemediation) {
                // Return to the main quiz at the next question
                state.needsRemediation = false;
                feedbackDiv.innerHTML += `<p><strong>Great! Now let's continue with the quiz.</strong></p>`;
                setTimeout(() => {
                    // Move to next question in the main quiz
                    state.currentQuestionIndex = state.pausedAtQuestion + 1;
                    const section = state.currentSection;
                    if (state.currentQuestionIndex < section.questions.length) {
                        showQuiz();
                    } else {
                        // Was the last question - complete section
                        completeSection();
                    }
                }, 2000);
            } else {
                // This was final completion after all questions
                setTimeout(() => {
                    completeSection();
                }, 1500);
            }
        } else {
            // Show next button
            const nextButton = document.createElement('button');
            nextButton.className = 'btn btn-primary next-btn';
            nextButton.textContent = 'Next Question';
            nextButton.onclick = nextFollowUpQuestion;
            feedbackDiv.appendChild(nextButton);
        }
    } else {
        // Wrong answer - return to documentation
        feedbackDiv.innerHTML = `
            <strong>✗ Incorrect</strong>
            <p>Let's review the documentation again.</p>
        `;
        
        setTimeout(() => {
            // Reset follow-up progress
            state.followUpCorrect = 0;
            showDocumentation();
        }, 2000);
    }
    
    saveProgress();
}

// Move to next follow-up question
function nextFollowUpQuestion() {
    state.followUpIndex++;
    
    if (state.followUpIndex < state.followUpQuestions.length) {
        displayFollowUpQuestion();
    } else {
        // Need more questions - shuffle and restart
        const shuffledQuestions = shuffleArray([...state.currentSection.followUpQuestions]);
        state.followUpQuestions = shuffledQuestions.map(q => shuffleQuestionOptions(q));
        state.followUpIndex = 0;
        displayFollowUpQuestion();
    }
}

// Complete section
function completeSection() {
    const section = state.currentSection;
    const totalQuestions = section.questions.length;
    const wrongCount = state.wrongAnswers.length;
    const score = Math.round(((totalQuestions - wrongCount) / totalQuestions) * 100);
    
    // Mark section as completed
    if (!state.completedSections.includes(section.id)) {
        state.completedSections.push(section.id);
    }
    
    document.getElementById('completion-message').textContent = 
        `You've successfully mastered ${section.title}!`;
    
    document.getElementById('final-stats').innerHTML = `
        <h3>Your Performance</h3>
        <div class="stat-item">
            <span class="stat-label">Total Questions:</span>
            <span class="stat-value">${totalQuestions}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Initial Score:</span>
            <span class="stat-value">${score}%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Topics Reviewed:</span>
            <span class="stat-value">${wrongCount > 0 ? wrongCount : 'None - Perfect!'}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Follow-up Questions:</span>
            <span class="stat-value">${wrongCount > 0 ? '3/3 Correct ✓' : 'Not Required'}</span>
        </div>
    `;
    
    saveProgress();
    renderSections(); // Update section cards
    showScreen('completion-screen');
    updateProgress();
}

// Continue to next section
function continueToNextSection() {
    if (state.completedSections.length === awsData.sections.length) {
        // All sections completed!
        showFinalCompletion();
    } else {
        showSectionSelection();
    }
}

// Show section selection
function showSectionSelection() {
    showScreen('section-screen');
}

// Show final completion
function showFinalCompletion() {
    const totalSections = awsData.sections.length;
    const totalQuestions = awsData.sections.reduce((sum, section) => sum + section.questions.length, 0);
    
    document.getElementById('overall-stats').innerHTML = `
        <h3>Overall Achievement</h3>
        <div class="stat-item">
            <span class="stat-label">Sections Completed:</span>
            <span class="stat-value">${totalSections}/${totalSections}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Total Questions Mastered:</span>
            <span class="stat-value">${totalQuestions}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Completion Rate:</span>
            <span class="stat-value">100%</span>
        </div>
    `;
    
    document.getElementById('completion-date').textContent = 
        new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    
    showScreen('final-completion-screen');
}

// Restart course
function restartCourse() {
    if (confirm('This will reset all your progress. Are you sure?')) {
        state.completedSections = [];
        state.sectionProgress = {};
        saveProgress();
        renderSections();
        showScreen('welcome-screen');
    }
}

// Update progress bar
function updateProgress() {
    const totalSections = awsData.sections.length;
    const completedCount = state.completedSections.length;
    const percentage = Math.round((completedCount / totalSections) * 100);
    
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent = 
        `Progress: ${percentage}% (${completedCount}/${totalSections} sections completed)`;
}

// Utility: Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
