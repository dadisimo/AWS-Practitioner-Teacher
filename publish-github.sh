#!/bin/bash

# Quick Publish Script for AWS Practitioner Teacher
# This script helps you publish to GitHub

echo "🎓 AWS Practitioner Teacher - GitHub Publisher"
echo "=============================================="
echo ""

# Check if we're in a git repo
if [ ! -d .git ]; then
    echo "❌ Not in a git repository!"
    exit 1
fi

echo "Please enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required!"
    exit 1
fi

repo_name="AWS-Practitioner-Teacher"
repo_url="https://github.com/${github_username}/${repo_name}.git"

echo ""
echo "📋 Instructions:"
echo "1. Go to https://github.com/new"
echo "2. Create a repository named: ${repo_name}"
echo "3. Make it PUBLIC"
echo "4. DO NOT initialize with README"
echo "5. Press Enter here when done..."
read

echo ""
echo "🔗 Adding remote..."
git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Go to https://github.com/${github_username}/${repo_name}/settings/pages"
    echo "2. Under 'Source', select 'main' branch"
    echo "3. Click 'Save'"
    echo ""
    echo "🎉 Your site will be live at:"
    echo "   https://${github_username}.github.io/${repo_name}/"
    echo ""
    echo "   (It may take 1-2 minutes to deploy)"
else
    echo ""
    echo "❌ Failed to push. Please check:"
    echo "   - That you created the repository"
    echo "   - Your GitHub credentials"
    echo "   - Your internet connection"
    echo ""
    echo "You can also push manually:"
    echo "   git remote add origin ${repo_url}"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi
