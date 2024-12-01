
# GitHub Must-Have Cheat Sheet

## General Git Commands

git config --global user.name "Your Name" <br>
git config --global user.email "your.email@example.com" <br>
git init <br>
git clone <repo-url> <br>
git status <br>

## Working with Changes
git add <file>                  # Stage a specific file <br>
git add .                       # Stage all changes <br>
git commit -m "Commit message"
git commit --amend --no-edit    # Amend last commit without changing the  message <br>
git checkout -- <file>          # Undo changes (unstaged) <br>
git reset <file>                # Unstage changes <br>

## Branch Management
git branch <branch-name>        # Create a branch <br>
git checkout <branch-name>      # Switch to a branch <br>
git checkout -b <branch-name>   # Create and switch to a branch <br>
git branch                      # List branches <br>
git branch -d <branch-name>     # Delete a branch <br>
