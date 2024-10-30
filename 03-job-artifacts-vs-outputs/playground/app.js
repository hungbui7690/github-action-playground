/*
  The Need For Dependency Caching
  - when we run the workflows -> it takes around 1min to run -> install all dependencies step
  - dependencies don't change frequently -> but we still repeat the step
  - Caching Node-npm Action: https://github.com/actions/cache/blob/main/examples.md#node---npm

    - test
      -> get code -> <install-dependencies> -> test app
    - build
      -> get code -> <install-dependencies> -> build app


--------------------------

    build:
      needs: test
      runs-on: ubuntu-latest
      steps:
        - name: Get code
          uses: actions/checkout@v3
        - <name>: Cache dependencies
          <uses>: actions/cache@v3
          <with>:
            path: ~/.npm
            key: <check_yaml_file>
        - name: Install dependencies
        run: npm ci


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Using & Invalidating Caches
  - if we change code 
  - or if we run: <npm outdate> -> <npm update>


*/
