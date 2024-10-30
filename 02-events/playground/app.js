/*
  Which Events Can You Use
  - Events that trigger workflow: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows


--------------------

  - this will trigger workflow on every branch 

      name: Events Demo 1
      <on>: [workflow_dispatch, push]

      name: Events Demo 1
      <on>: 
        push:
        workflow_dispatch:

  🍖 we want to trigger workflow on specific branch (main branch)


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Introducing Event Filters & Activity Types
  - some events have "activity types" associated with them
    -> ex: "pull_request" has opened/closed/edited... 
  - we can also add filter to the event 
    -> ex: push event -> we only want run jobs on main branch


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Activity Types
  - https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
    -> column Activity Types

  
  - trigger only when PR is opened
      on: 
        pull_request:
          <types>: opened
        workflow_dispatch:

  - trigger only when PR is opened or edited
      on: 
        pull_request:
          <types>: [opened, edited, ...]
        workflow_dispatch:

  1. git checkout -b dev
  2. change the code 
  3. commit & push
  4. create PR
  5. workflow is triggered


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Using Event Filters
  - https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore

  - trigger when push with filter
    + branches name === 'main' || starts with 'dev/'
    + includes files that ends with .js
    + tag name starts with 'v1.' or 'v2'
    + include at least one file outside the "docs" directory at the root of the repository.

      on:
        push:
          <branches>:
            - 'main'
            - 'dev-**' -> dev-new / dev-this-is-new
            - 'dev/**' -> dev/new / dev/new/button
          <paths>:
            - '**.js'
          <paths-ignore>:
            - 'docs/**'
          <tags>: 
            - v2
            - v1.*


--------------------

  - when we change the file that ends in .js
      on:
      push:
        <paths>:
          - '**.js'


--------------------

  - when we don't make any changes on /docs
      on:
        push:
          <paths-ignore>:
            - 'docs/**'


--------------------

  - when the tag name === 'v2' or starts with 'v1.'
      on:
        push:
          <tags>: 
            - v2
            - v1.*


--------------------

  - trigger workflows when push to 'main' or 'dev-' or 'feat/' branch
    -> when the commit does not change the path '.github/workflows/

      name: Events Demo 1
      on:
        <pull_request>:
          types:
            - opened
          branches:
            - main # main
            - 'dev-*' # dev-new dev-this-is-new
            - 'feat/**' # feat/new feat/new/button
        <workflow_dispatch>:
        <push>:
          branches:
            - main # main
            - 'dev-*' # dev-new dev-this-is-new
            - 'feat/**' # feat/new feat/new/button
            # developer-1
          paths-ignore:
            - '.github/workflows/*'


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Special Behavior Forks & Pull Request Events
  - fork a repo 
  - clone 
  - make changes 
  - push changes
  - create PR

      on:
        <pull_request>:
          types:
            - opened
          branches:
            - main # main
            - 'dev-*' # dev-new dev-this-is-new
            - 'feat/**' # feat/new feat/new/button

  => but it still not work -> require approval from maintainers
  => prevent malicious workflow runs & excess cost could be caused
  => avoid spam from untrusted contributors
  => just maintainer can trigger the workflow manually 
  - collaborators can trigger the workflow -> just the forker cannot trigger the workflow


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Cancelling Workflows & Skipping Workflows
  - https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/skipping-workflow-runs

  - cancel: 
    + if job fails
    + job fails if at least 1 step fails
    + can cancel the entire workflow manually
  - skip: 
    + in case we add comments to our code -> we don't want to run the workflow

  - to skip -> commit message must have: 
    # [skip ci]
      [ci skip]
      [no ci]
      [skip actions]
      [actions skip]


*/
