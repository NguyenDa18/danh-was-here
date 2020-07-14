---
template: BlogPost
path: /git-command-cheatsheet
date: 2020-06-18T01:36:55.459Z
title: Git Command Cheatsheet
metaDescription: 'Cheatsheet of Git commands to use, source control'
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1581529285/blog/git_img_p51ghm.jpg
tags: ["Quick Notes"]
---
# My Cheatsheet

---
## Basics
---
### Configure git
- `git config user.name "name"`
- `git config user.email "fakemail@mail.com"`
- `git config --global alias.<my alias> '<git command to abbrev>'`
- [Change author and email after commit](https://www.git-tower.com/learn/git/faq/change-author-name-email)

### View global config
- `git config --list`
- `git config --list --show-origin` : view .git/config file location
- `git branch -vv` : view upstream tracking info for each branch of your repo in 

### Remove git tracking from folder:
- `rm -rf .git`

### Git Revert
- `git revert <commit hash>`
- Applies git commit that reverts that commit

### Git Cherry Pick
- `git log` : grab Commit Hash
- `git checkout <target branch>`
- `git cherry-pick <copied hash>` : Move the changes done in commit hash to this target branch

### Git Remove Commit Change
- `git checkout <branch to remove change from>`

#### SOFT METHOD
- `git reset --soft <commit Hash you want to start from>` : removes the commits BUT doesn't remove changes: `git status` shows changes that were removed and to be committed (in staging, with changes staged for commit)
- `git log` : see that commit msgs after <commit Hash you want to start from> are gone

#### MIXED METHOD
- `git reset <commit hash>` : removes commits BUT keeps changes in working directory (but changes not staged)

#### HARD METHOD
- `git reset --hard <commit hash>` : reverts tracked files to state they were in before but it leaves untracked files alone

### Git Clean
- `git clean -df` : Removes untracked files and folders, keeps working directory clean

### Git Reflog
- `git reflog` : walkthrough of operations to git history

### Git tracking errors --need to rebase
- `git pull`
- `git merge origin/<feature branch>`

### Git squash commits
- `git merge --squash <feature branch>`

### Git view files changed in commit
- `git diff-tree --no-commit-id --name-only -r <commit hash>`

### Git add extra file to commit
- `git commit --amend`
- New file will be added to previous commit

### Git change recent commit message
- `git commit --amend -m "Changed previous commit msg"`

---
## Logging
---

### Git Log What Files Changed
- `git whatchanged`

### Git Log What Files Changed in Last N Commits
- `git log --name-status -<N>`

---
## Working with Remote
---

### Sync Forked Repo with Original
```sh
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

# Sync your fork
git fetch upstream
git checkout master
git merge upstream/master
```

### Git Remote View Origin
- `git remote -v`

### Git Remote Set
- `git remote set-url origin <url>`
- `git remote set <url>`

### Git Pull - Fatal, Refuse to Merge Unrelated Histories
- `git pull origin <remote branch> --allow-unrelated-histories`

### Git Delete Remote Branch
- `git push origin --delete <remote branch>`

### Git Checkout Remote Branch
- `git checkout -b <branch name> origin/<branch name>`


---
## Deletion
---

### Dry Run, Check which files will be deleted
- `git clean -d -n`

### Git Delete Untracked Files and Repos
- `git clean -d -f`

### Git Remove untracked files (run when SURE of what will be deleted)
- `git clean`

---
---

### Sources

- [Git Sync Forks](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/)
- [Git Untracked Deletion](https://linuxize.com/post/how-to-remove-untracked-files-in-git/)
- [Git Whatchanged](https://linux.die.net/man/1/git-whatchanged)
- [Git find remote tracking branches](https://stackoverflow.com/questions/171550/find-out-which-remote-branch-a-local-branch-is-tracking)
