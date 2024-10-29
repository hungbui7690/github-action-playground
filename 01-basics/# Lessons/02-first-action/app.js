/*
  Key Components Workflows, Jobs, Steps & More
  - Repo
    @ Workflow 1
      # Job 1
        ~ Step 1
        ~ Step 2
        ...
      # Job 2
      # Job 3
      ....
    @ Workflow 2
    @ Workflow 3
    ...

  - workflows are triggered by events
  - jobs: 
    # define runner (exec env)
    # container 1 or more steps
    # run parallel (by default) or sequential
    # can be conditional
  - steps:
    # exec a shell script or an action
    # can use custom or 3rd party actions
    # exec in order 
    # can be conditional


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Creating a First Workflow
  - Host Runner: https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories
  - Github -> Actions -> Click on any Action -> Rename to first-action.yml
    # github-action-tutorial/.github/workflows/first-action.yml

      name: First Workflow
      on: workflow_dispatch # trigger workflow manually
      jobs: 
        first-job:
          runs-on: ubuntu-latest # host runner
          steps: 
            - name: Print Greeting
              run: echo "Hello World"
            - name : Print Goodbye
              run: echo "Goodbye World"

  - Commit the changes
  

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Running the First Workflow
  - Github -> Actions -> First Workflow -> Run Workflow
    # click on the Workflow for detail information


*/
