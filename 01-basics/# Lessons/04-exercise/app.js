/*
  Exercise
  - create 2 workflows 
    # run "lint", "test", "build" on "push"
    # output event details on "issues" -> github context


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  @ Workflow 1: run "lint", "test", "build" on "push"
  - Solution 1: create <deployment1.yml> -> single job

      name: Deployment Exercise 1
      on: push
      jobs:
        deploy:
          runs-on: ubuntu-latest
          steps:
            - <name>: Get code
              uses: actions/checkout@v3
            - <name>: Install dependencies
              run: npm ci
            - <name>: Lint
              run: npm run lint
            - <name>: Test code
              run: npm run test
            - <name>: Build code
              run: npm run build
            - <name>: Deploy code
              run: echo "Deploying..."


----------------------

  - Solution 2: create <deployment2.yml> -> multiple jobs

      name: Deployment Exercise 2
      on: push
      jobs:
        <lint>:
          runs-on: ubuntu-latest
          steps: 
            - name: Get code
              uses: actions/checkout@v3
            - name: Install dependencies
              run: npm ci
            - name: Lint
              run: npm run lint
        <test>:
          needs: lint
          runs-on: ubuntu-latest
          steps: 
            - name: Get code
              uses: actions/checkout@v3
            - name: Install dependencies
              run: npm ci
            - name: Test code
              run: npm run test
        <deploy>:
          needs: test
          runs-on: ubuntu-latest
          steps:
            - name: Get code
              uses: actions/checkout@v3
            - name: Install dependencies
              run: npm ci
            - name: Build code
              run: npm run build
            - name: Deploy code
              run: echo "Deploying..."


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  @ Workflow 2: output event details on "issues" -> github context
  - create <issues.yml>

      name: Handle issues
      on: <issues>
      jobs:
        output-info:
          runs-on: ubuntu-latest
          steps:
            - name: Output event details
              <run>: echo "${{ toJSON(github.event) }}"


*/
