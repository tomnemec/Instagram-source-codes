# General Git Commands
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git init
git clone <repo-url>
git status

# Working with Changes
git add <file>                  # Stage a specific file
git add .                       # Stage all changes
git commit -m "Commit message"
git commit --amend --no-edit    # Amend last commit without changing the message
git checkout -- <file>          # Undo changes (unstaged)
git reset <file>                # Unstage changes

# Branch Management
git branch <branch-name>        # Create a branch
git checkout <branch-name>      # Switch to a branch
git checkout -b <branch-name>   # Create and switch to a branch
git branch                      # List branches
git branch -d <branch-name>     # Delete a branch

# Working with Remote Repositories
git remote -v                   # View remotes
git remote add <name> <url>     # Add a remote
git push <remote> <branch>      # Push changes
git pull <remote> <branch>      # Pull changes
git fetch <remote>              # Fetch updates without merging

# Collaboration
git push origin <branch-name>   # Push branch for PR
# On GitHub: Create Pull Request
# On GitHub: Review and merge PR

# Advanced
git merge <branch-name>         # Merge branches
git rebase <branch-name>        # Rebase a branch
git stash                       # Save changes temporarily
git stash pop                   # Apply stashed changes
git rebase -i HEAD~<number>     # Squash commits
git add <file>                  # Stage resolved conflicts
git rebase --continue           # Continue after resolving conflicts

# Logs and History
git log                         # View commit history
git log --oneline --stat        # Short log with stats
git show <commit-hash>          # Show specific commit details

# GitHub CLI (gh)
gh auth login                   # Authenticate with GitHub
gh repo clone <owner>/<repo>    # Clone a repository
gh pr create --title "Title" --body "Description"  # Create a PR
gh pr status                    # Check PR status

# Tips
# Add to ~/.gitconfig for aliases:
# [alias]
# co = checkout
# br = branch
# ci = commit
# st = status
# lg = log --oneline --graph --decorate --all
