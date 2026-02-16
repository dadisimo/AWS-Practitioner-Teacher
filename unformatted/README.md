# Unformatted Content Directory

Drop raw files here (`.json`, `.txt`, `.md`, or any text file) containing AWS quiz questions, study notes, or exam material.

## What Happens

When you push files to this directory and assign a Copilot coding agent to process them, it will:

1. **Read and understand** the content (questions, notes, bullet points, etc.)
2. **Check for duplicates** against all existing questions in `questions/`
3. **Fill in missing data** — if questions lack explanations, options, or if the file only has study notes, the agent will research and generate complete quiz content
4. **Format everything** into the correct JSON structure
5. **Add questions** to the appropriate section file in `questions/`
6. **Regenerate the manifest** so the app picks up changes
7. **Delete the processed file** from this directory

## How to Use

1. Drop your file(s) here
2. Commit and push
3. Create an issue or PR asking Copilot to "Process files in unformatted/"
4. The agent handles the rest

## Supported Input Formats

- Raw questions with answers
- Study notes or bullet points about AWS topics
- Exam dumps or practice test content
- JSON files with partial question data
- Any text describing AWS services/concepts
