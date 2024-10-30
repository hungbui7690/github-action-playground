/*
  Vitest 
  - vite.config.js -> outputFile: 'test.json',
    => execution-flow.yml -> upload test.json

  ❌ if "npm run test" fails -> the next steps will not be executed
    -> other jobs that "needs" "test" will not be executed

      jobs:
        test:
          runs-on: ubuntu-latest
          steps:
            - <name>: Test code
              run: npm run test
            - <name>: Upload test report
              uses: actions/upload-artifact@v3
              with:
                name: test-report
                <path>: <test.json>


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Controlling Execution via if
  - steps context: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#steps-context
    -> steps.<step_id>.conclusion	
        # The result of a completed step after <continue-on-error> is applied. Possible values are success, failure, cancelled, or skipped. When a continue-on-error step fails, the <outcome> is <failure>, but the final conclusion is success.


-----------------------

  - status check functions: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/evaluate-expressions-in-workflows-and-actions#status-check-functions
    -> if: ${{ failure() }}
      # Returns true when any previous step of a job fails. If you have a chain of dependent jobs, failure() returns true if any ancestor job fails.


-----------------------

      steps:
        - name: Test code
          <id>: run-test
          run: npm run test
        - name: Upload test report
          <if>: failure() && steps.run-tests.outcome == 'failure'
          uses: actions/upload-artifact@v3
          with:
            name: test-report
            path: test.json
      => must have special failure() status functions


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Conditional Jobs
  - step # 3.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  More if Examples
  - https://github.com/actions/cache
    -> Outputs: 
        # cache-hit - A string value to indicate an exact match was found for the key.
          + If there's a cache hit, this will be 'true' or 'false' to indicate if there's an exact match for key.
          + If there's a cache miss, this will be an empty string.
      # if: steps.cache.outputs.cache-hit != 'true'

  - step # 4.


*/
