/*
  Slide 
  - check slide for all possible commands


  Git Revert vs Git Reset
  - git revert <id>
    -> code will go back to specific commit
    -> a new commit will be made

  - git reset --hard <id> 
    -> code will go back to specific commit
    -> history after that <id> will be gone


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Branch 
  - git branch
    # list of all branches
  - git branch <name>
    # create new branch
  - git checkout <branch_name>
  - git branch -D <branch_name>
    # delete branch 
  - git checkout -b <branch_name>
    # create new branch and switch to it


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Merge Branch
  - git checkout <main>
  - git merge <branch_name>
    -> merge <branch_name> to main

  ❎ Create a new branch from main -> then merge from that branch to test before doing the real merge


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Connecting Local & Remote Repositories
  - git remote add <name> <url>
    -> git remote add origin https://github.com/username/username.git
  - git remote -v


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Pushing Commits & Understanding Permissions
  - git push origin main
    -> error 

  - git remote set-url origin <url>
    -> git remote set-url origin https://<username@>github.com/username/username.git
  - git push origin main
    -> require password
    -> if we don't have password -> can use token
      # Settings -> Developer settings -> Personal access tokens -> checkbox <repo>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Branch - From Local to Remote
  - git push origin <branch_name>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Pulling Changes
  - git pull
    -> pull changes from remote to local


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  GitHub Issues & Collaborators
  - clone repo
  - make some changes
  - CANNOT PUSH CHANGES to repo that we cloned from GitHub


-----------------

  - 2 ways:
    # fork 
      -> clone and push
      -> create a PR
    # contact the owner -> via Issues (not recommended)


  - assume that we are the collaborator -> can push
    # git remote set-url origin https://<usernameXYZ@>github.com/username/username.git
    # git push


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Protect Branch
  - Settings -> Branches -> Add Rules



\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Pull Requests
  - userXYZ:
    - done some changes with feature branch 
    - push that branch to remote
    - create a PR

  - user owner: 
    - go to PR 
    - check the PR 
    - approve 
    - merge

  
    🎈 Issues has the number -> #1 for example 
      -> we can refer to that issue from github by enter # in the comment


*/
