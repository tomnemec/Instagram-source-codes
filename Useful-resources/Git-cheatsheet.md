
# GitHub Must-Have Cheat Sheet

## General Git Commands

**git config --global user.name "Your Name"** <br>
**git config --global user.email "your.email@example.com"** <br>
**git init** <br>
**git clone <repo-url>** <br>
**git status** <br>

## Working with Changes
**git add <file>**                  <span style="color: gray;"># Stage a specific file</span> <br>
**git add** .                       # Stage all changes <br>
**git commit -m "Commit message"**  <br>
**git commit --amend --no-edit**    # Amend last commit without changing the message <br>
**git checkout -- <file>**          # Undo changes (unstaged) <br>
**git reset <file>**                # Unstage changes <br>

## Branch Management
**git branch <branch-name>**        # Create a branch <br>
**git checkout <branch-name>**      # Switch to a branch <br>
**git checkout -b <branch-name>**   # Create and switch to a branch <br>
**git branch**                      # List branches <br>
**git branch -d <branch-name>**     # Delete a branch <br>

## Working with Remote Repositories
**git remote -v**                   # View remotes <br>
**git remote add <name> <url>**     # Add a remote <br>
**git push <remote> <branch>**      # Push changes <br>
**git pull <remote> <branch>**      # Pull changes <br>
**git fetch <remote>**              # Fetch updates without merging <br>

## Collaboration
**git push origin <branch-name>**   # Push branch for PR <br>

## Advanced
**git merge <branch-name>**         # Merge branches <br>
**git rebase <branch-name>**        # Rebase a branch <br>
**git stash**                       # Save changes temporarily <br>
**git stash pop**                   # Apply stashed changes <br>
**git rebase -i HEAD~<number>**     # Squash commits <br>
**git add <file>**                  # Stage resolved conflicts <br>
**git rebase --continue**           # Continue after resolving conflicts <br>

## Logs and History
**git log**                         # View commit history <br>
**git log --oneline --stat**        # Short log with stats <br>
**git show <commit-hash>**          # Show specific commit details <br>

## GitHub CLI (gh)

**gh auth login**                   # Authenticate with GitHub <br>
**gh repo clone <owner>/<repo>**    # Clone a repository <br>
**gh pr create --title "Title" --body "Description"**  # Create a PR <br>
**gh pr status**                    # Check PR status <br>

## Tips
Add to ~/.gitconfig for aliases: <br>
[alias]
    co = checkout <br>
    br = branch <br>
    ci = commit <br>
    st = status <br>
    lg = log --oneline --graph --decorate --all <br>


