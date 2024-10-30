/*
  Ignoring Errors & Failures with continue-on-error
  - create <continue.yml>

    steps: 
      - <name>: Test code
        <continue-on-error>: <true>
        id: run-tests
        run: npm run test
      - <name>: Upload test report
        ...


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Matrix Strategies
  - define a set of different configurations (like operating system versions, programming language versions, etc.) 
  - <matrix-1.yml>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Including & Excluding Values (Matrix Strategy)
  - <matrix-2.yml>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Saving Time & Code with Reusable Workflows
  - <reusable.yml> -> base file

      on: <workflow_call>:
      -> this workflow will be called based on another workflow

  
-----------------------

  - <caller.yml> -> we want to reuse the <reusable.yml> workflow 

      jobs:
        deploy:
          <uses>: ./.github/workflows/reusable.yml 


*/
