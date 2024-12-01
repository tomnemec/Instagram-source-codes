
# GitHub Must-Have Cheat Sheet

## General Git Commands

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git clone <repo-url>
git status

## Working with Changes
git add <file>                  # Stage a specific file
git add .                       # Stage all changes
git commit -m "Commit message"
git commit --amend --no-edit    # Amend last commit without changing the message
git checkout -- <file>          # Undo changes (unstaged)
git reset <file>                # Unstage changes

## Branch Management
git branch <branch-name>        # Create a branch
git checkout <branch-name>      # Switch to a branch
git checkout -b <branch-name>   # Create and switch to a branch
git branch                      # List branches
git branch -d <branch-name>     # Delete a branch
