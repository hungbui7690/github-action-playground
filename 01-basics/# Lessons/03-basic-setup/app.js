/*
  A New Workflow & The push Event
  - Events: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
    # Repo Related: 
      - push
      - pull_request
      - create -> a branch or tag was created
      - fork -> repo was fork
      - issues -> an issue was opened, deleted...
      - issue_comment
      - watch -> repo was starred
      - discussion -> discussion action (created, deleted...)
      - ....

    Other: 
      - workflow_dispatch -> manually trigger workflow
      - repository_dispatch -> REST API request trigger workflow
      - schedule 
      - workflow_call -> can be called from other workflows


  - create .github/workflows/<test.yml> -> now we have 1 job + 1 step
      name: Test Project
      on: push
      jobs:
        test:
          runs-on: ubuntu-latest
          steps:
            - <name>: Get code


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Using Actions In Workflows
  - Actions: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow
    # a app that performs a frequently repeated task
    # we can build our own Actions but we can also use the official actions
  - Command ("run"): shell command that's defined by us


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Config Actions
  - Checkout Action in Github Marketplace: https://github.com/marketplace/actions/checkout
  - Setup Node Action: https://github.com/marketplace/actions/setup-node-js-environment
    -> to install NodeJS

      steps:
        - name: Get code
          uses: actions/<checkout@v3>
        - name: Install NodeJS
          <uses>: actions/<setup-node@v3>
          <with>: 
            node-version: 18     


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding More Steps
  - npm ci: clean install dependencies

      steps:
        - name: Install dependencies
          run: npm ci
        - name: Run tests
          run: npm test

  - we're done with the setup 
    # git add . 
    # git commit -m "message"
    # git push
      -> if use GH token -> make sure to allow to use workflow

  - GH -> Actions -> Run 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Failing Workflows & Analyzing Workflows
  - change any of the test case -> add .not to it to make the test fail 
  - commit and push 
  - run the workflow -> failed 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Adding Multiple Jobs
  - create <deployment.yml>
  - every job has its own host runner
  - steps: 
    - checkout the code
    - install dependencies
    - build project
    - deploy

        name: Deploy Project
        on: push
        jobs:
          <test>:
          <deploy>:
            <needs>: test
            runs-on: ubuntu-latest
            steps:
              - <name>: Get code
                uses: actions/checkout@v3
              - <name>: Install NodeJS
                uses: actions/setup-node@v3
                with:
                  node-version: 18
              - <name>: Install dependencies
                run: npm ci
              - <name>: Build project
                run: npm run build
              - <name>: Deploy
                run: echo "Deploying ..."

  🎐 with this setup, 2 jobs run in parallel


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Jobs In Parallel vs Sequential
  - we want to run deploy job after test job -> <sequential> -> <needs>

      jobs:
        test:
        deploy:
          <needs>: test 
          runs-on: ubuntu-latest
          steps:
            - <name>: Get code
              uses: actions/checkout@v3
          ...

  🌲 multiple ways: 
    - <needs>: test 
    - or <needs>: [test] 

  ❌ with this setup -> if the test job not pass, the deploy job will not run


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Multiple Triggers (Events)
  - we don't only want to trigger jobs when "push" event happens
    -> we can add other events as well 

      name: Deploy Project
      <on>: [push, workflow_dispatch]


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Expressions & Context Objects
  - sometimes, we need to work with meta data like ENV variables 
  - Context: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs
  - Expressions: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/evaluate-expressions-in-workflows-and-actions
  - create <output.yml>

      name: Output information
      on: workflow_dispatch
      jobs:
        info:
          runs-on: ubuntu-latest
          steps:
            - name: Output GitHub context
              <run>: echo "${{ toJSON(github) }}"





*/
