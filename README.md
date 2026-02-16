# AWS Practitioner Teacher 🎓

An interactive mobile-first web application for learning and preparing for the AWS Certified Cloud Practitioner exam.

## Features

- **5 Comprehensive Sections** covering all exam topics:
  - ☁️ Cloud Concepts & Architecture
  - 🔒 Security & Compliance
  - 💻 Technology & Services
  - 💰 Billing & Pricing
  - ⚙️ Management & Governance

- **10+ Questions per Section** - Comprehensive coverage of each topic
- **Interactive Learning Flow**:
  - Take a quiz for each section
  - Incorrect answers lead to detailed documentation
  - Follow-up quiz with 3 questions to reinforce learning
  - Must answer all 3 correctly to proceed (one wrong answer returns you to documentation)

- **Progress Tracking** - Your progress is saved automatically
- **Mobile-Responsive Design** - Study anywhere on any device
- **Detailed Documentation** - Comprehensive study guides for each section
- **Certificate of Completion** - Celebrate your achievement when you finish all sections

## How to Use

1. Open `index.html` in your web browser
2. Click "Start Learning" on the welcome screen
3. Choose a section to begin
4. Complete the quiz
5. If you get any wrong answers, study the documentation
6. Pass the follow-up quiz (3/3 correct) to complete the section
7. Complete all sections to become exam-ready!

## Technologies Used

- HTML5
- CSS3 (with mobile-first responsive design)
- Vanilla JavaScript (no frameworks required)
- LocalStorage for progress tracking

## Installation

No installation required! Simply clone this repository and open `index.html` in your web browser:

```bash
git clone <repository-url>
cd AWS_practitioner_teacher
open index.html
```

Or use a local server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Publishing

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/AWS_practitioner_teacher/`

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Import the repository to Vercel
2. Deploy with one click

## Project Structure

```
AWS_practitioner_teacher/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styles
├── app.js              # Application logic
├── data.js             # AWS exam content and questions
└── README.md           # This file
```

## Features in Detail

### Quiz System
- Multiple-choice questions
- Immediate feedback
- Explanation for each answer
- Progress tracking

### Documentation
- Comprehensive coverage of AWS topics
- Real exam-focused content
- Easy-to-understand explanations
- Code examples where applicable

### Follow-up Questions
- Reinforces learning after reading documentation
- Requires 3 correct answers to proceed
- Returns to documentation on wrong answer
- Shuffled questions for variety

### Progress Tracking
- Automatic save to browser localStorage
- Visual progress bar
- Section completion tracking
- Resume where you left off

## Content Coverage

### Cloud Concepts & Architecture
- Cloud computing fundamentals
- AWS Global Infrastructure
- Well-Architected Framework
- Shared Responsibility Model

### Security & Compliance
- IAM (Users, Groups, Roles, Policies)
- Security services (CloudTrail, GuardDuty, etc.)
- Encryption and data protection
- Compliance programs

### Technology & Services
- Compute (EC2, Lambda, ECS)
- Storage (S3, EBS, EFS)
- Database (RDS, DynamoDB, Aurora)
- Networking (VPC, CloudFront, Route 53)

### Billing & Pricing
- AWS pricing models
- Cost management tools
- Free Tier details
- Support plans

### Management & Governance
- CloudFormation
- CloudWatch
- AWS Organizations
- Trusted Advisor

## License

This project is created for educational purposes. AWS and related trademarks are property of Amazon Web Services, Inc.

## Contributing

Feel free to submit issues and enhancement requests!

## Disclaimer

This is an educational tool to help prepare for the AWS Certified Cloud Practitioner exam. It is not affiliated with or endorsed by Amazon Web Services. Always refer to official AWS documentation and training materials for the most up-to-date information.

---

**Good luck with your AWS certification journey! 🚀**
