#!/usr/bin/env node

/**
 * Generates manifest.json for the questions directory.
 * 
 * Run this script whenever you add, remove, or rename JSON files
 * in the questions/ directory:
 * 
 *   node generate-manifest.js
 * 
 * This creates questions/manifest.json which tells the app
 * which quiz files to load.
 */

const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, 'questions');
const manifestPath = path.join(questionsDir, 'manifest.json');

// Required fields for validation
const REQUIRED_FIELDS = ['id', 'title', 'icon', 'description', 'questions', 'documentation', 'followUpQuestions'];

// Read all .json files from the questions directory (excluding manifest.json)
const files = fs.readdirSync(questionsDir)
    .filter(file => file.endsWith('.json') && file !== 'manifest.json')
    .sort();

console.log(`Found ${files.length} JSON file(s) in questions/`);

const validFiles = [];
const errors = [];

for (const file of files) {
    const filePath = path.join(questionsDir, file);
    try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Validate required fields
        const missingFields = REQUIRED_FIELDS.filter(field => !(field in content));
        if (missingFields.length > 0) {
            errors.push(`  ❌ ${file}: Missing fields: ${missingFields.join(', ')}`);
            continue;
        }
        
        // Validate questions array
        if (!Array.isArray(content.questions) || content.questions.length === 0) {
            errors.push(`  ❌ ${file}: questions must be a non-empty array`);
            continue;
        }
        
        // Validate each question
        let questionsValid = true;
        for (let i = 0; i < content.questions.length; i++) {
            const q = content.questions[i];
            if (!q.question || !Array.isArray(q.options) || typeof q.correct !== 'number' || !q.explanation) {
                errors.push(`  ❌ ${file}: Invalid question at index ${i}`);
                questionsValid = false;
                break;
            }
        }
        if (!questionsValid) continue;
        
        // Validate followUpQuestions
        if (!Array.isArray(content.followUpQuestions)) {
            errors.push(`  ❌ ${file}: followUpQuestions must be an array`);
            continue;
        }
        
        validFiles.push(file);
        console.log(`  ✅ ${file} (${content.questions.length} questions, ${content.followUpQuestions.length} follow-ups)`);
    } catch (e) {
        errors.push(`  ❌ ${file}: ${e.message}`);
    }
}

if (errors.length > 0) {
    console.log('\nSkipped files with errors:');
    errors.forEach(e => console.log(e));
}

// Write manifest
const manifest = {
    files: validFiles,
    generated: new Date().toISOString()
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\n✅ Generated manifest.json with ${validFiles.length} valid section(s)`);
