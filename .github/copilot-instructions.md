# AWS Practitioner Teacher — Copilot Coding Agent Instructions

## Overview

This is an AWS Cloud Practitioner exam preparation quiz app. Quiz data lives as individual JSON files in the `questions/` directory. Users may drop raw/unformatted content into the `unformatted/` directory for processing.

## Your Task: Process Unformatted Files

When a file (`.json`, `.txt`, `.md`, or any text file) appears in the `unformatted/` directory, you must:

### Step 1 — Understand the Content

- Read the file and determine what AWS topic(s) it covers.
- The content may be raw questions, study notes, bullet points, exam dumps, or any unstructured text about AWS services.
- Identify all questions, answers, and explanations present in the file.

### Step 2 — Check for Duplicates

- Read **all** existing JSON files in `questions/` to understand what questions already exist.
- Compare each new question against existing ones. A question is a duplicate if:
  - The question text is substantially the same (even if worded differently).
  - It tests the exact same concept with the same answer options.
- **Do NOT add duplicate or near-duplicate questions.** Skip them silently.

### Step 3 — Determine Target Section

- Decide which existing section the questions belong to based on topic:
  - `cloud-concepts.json` — Cloud fundamentals, Well-Architected Framework, Shared Responsibility Model, global infrastructure, deployment models, scalability, elasticity
  - `security-compliance.json` — IAM, security services, compliance programs, encryption, AWS Shield, WAF, GuardDuty, Inspector
  - `technology-services.json` — EC2, S3, Lambda, RDS, DynamoDB, VPC, CloudFront, Route 53, ECS, EKS, and other core services
  - `billing-pricing.json` — Pricing models, Free Tier, Cost Explorer, Budgets, TCO Calculator, Reserved/Spot/On-Demand instances, billing
  - `management-governance.json` — CloudWatch, CloudTrail, Config, Organizations, Trusted Advisor, Systems Manager, Control Tower
- If the content covers a **new topic** that doesn't fit existing sections, create a **new JSON file** in `questions/` with an appropriate `id`, `title`, `icon`, and `description`.

### Step 4 — Fill in Missing Data

If the source material is incomplete (e.g., questions without explanations, or just study notes without questions), you must **research and generate** the missing parts:

- **Missing explanations:** Write a clear, concise explanation of why the correct answer is right. Reference official AWS documentation concepts.
- **Missing wrong options:** Create 3 plausible but incorrect answer options. They should be realistic enough to challenge students.
- **Missing questions:** If the file contains study notes or topics but no questions, generate at least 5 high-quality multiple-choice questions from the material.
- **Missing documentation:** Write comprehensive HTML study material covering the topic. Follow the format of existing `documentation` fields — use `<h3>`, `<h4>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>` tags.
- **Missing follow-up questions:** Generate at least 5 follow-up questions that cover the key concepts in the documentation.

### Step 5 — Format the Output

Each question must follow this exact format:

```json
{
  "id": <sequential_number>,
  "question": "Question text here?",
  "options": [
    "Option A",
    "Option B", 
    "Option C",
    "Option D"
  ],
  "correct": <0-3>,
  "explanation": "Clear explanation of why the correct answer is right."
}
```

Follow-up questions use a slightly simpler format (no `id` or `explanation`):

```json
{
  "question": "Follow-up question text?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": <0-3>
}
```

The complete section JSON file format is:

```json
{
  "id": "section-id-kebab-case",
  "title": "Section Display Title",
  "icon": "📚",
  "description": "Brief description shown on the section card",
  "questions": [ ... ],
  "documentation": "<h3>Title</h3><p>HTML study content...</p>",
  "followUpQuestions": [ ... ]
}
```

### Step 6 — Distribute Correct Answers

**IMPORTANT:** Do NOT put all correct answers in the same position. Distribute `correct` values (0, 1, 2, 3) roughly evenly across all questions. This prevents students from guessing patterns.

### Step 7 — Update the Section File

- If adding to an existing section: read the current file, append the new (non-duplicate) questions to the `questions` array, update question `id` numbers to be sequential, and write the file back.
- If creating a new section: create the complete JSON file with all required fields.

### Step 8 — Regenerate Manifest

After modifying or creating question files, run:

```bash
node generate-manifest.js
```

This updates `questions/manifest.json` so the app discovers all section files.

### Step 9 — Delete the Processed File

After successfully processing and integrating the content, **delete the original file from the `unformatted/` directory**. Do not leave processed files behind.

### Step 10 — Commit and Summarize

Commit all changes with a descriptive message, for example:
```
Add 15 new questions to security-compliance from uploaded study notes
```

In your PR description, include:
- How many questions were added (and to which sections)
- How many duplicates were skipped
- Whether any new sections were created
- Whether any data was researched and generated (missing explanations, questions from notes, etc.)

## Quality Standards

- All questions must be factually accurate and aligned with the **current** AWS Cloud Practitioner (CLF-C02) exam.
- Explanations should be educational — not just "the answer is X" but WHY it's correct.
- Wrong options should be plausible. Avoid obviously absurd distractors.
- Each section should have at least 5 `followUpQuestions`.
- Documentation HTML should be well-structured and comprehensive.

## File Validation

Before committing, verify your JSON is valid by running:

```bash
node generate-manifest.js
```

If any file fails validation, fix it before committing. The script will report which files have issues and what fields are missing.
