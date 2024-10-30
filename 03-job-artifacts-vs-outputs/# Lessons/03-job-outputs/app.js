/*
  Job Outputs
  - Artifacts: 
    # output files & folders
    # typically used for sharing log files, app binary...
  - Job Outputs:
    # simple values 
    # typically used for re-using a value in different jobs
      -> name of a file generated in prev build step


----------------------

  - npm run build -> generate dist/assets/index.xxxxx.js
    -> we want to share this file name

      jobs:
        test:
        ...
        build:
          steps:
            ...
            - name: Build website
              run: npm run build
            - <name> : Publish JS filename
              <run>: find dist/assets/*.js -type f -execdir echo '{}' ';'
            - name: Upload artifacts
              ...
  

  - find dist/assets/*.js -type f -execdir echo '{}' ';'
    -> this command return the file name 
  - this setup won't share the job outputs 

--------------------

  - to share -> add outputs to the job + modify the command + add id in step

      jobs:
        test:
        ...
        build:
          <outputs>:
            <script-file> : ${{ steps.publish.outputs.script-file }}
          steps:
            - name : Publish JS filename
              <id>: publish
              <run>: find dist/assets/*.js -type f -execdir echo '::set-output name=script-file::{}' ';'
        deploy:
          needs: build
          steps: 
          - <name>: Output file name # 3.
            <run>: echo ${{ needs.build.outputs.script-file }}


  🍖 echo "::set-output name=script-file::index.html"


--------------------

  - another way: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

      jobs:
        job1:
          runs-on: ubuntu-latest
          # Map a step output to a job output
          <outputs>:
            output1: ${{ steps.step1.outputs.test }}
          <steps>:
            - id: step1
              run: echo "test=hello" >> "$GITHUB_OUTPUT"
            - id: gen_output
              run: |
                version="${{ matrix.version }}"
                echo "output_${version}=${version}" >> "$GITHUB_OUTPUT"
        job2:
          runs-on: ubuntu-latest
          needs: job1
          steps:
            - env:
                <OUTPUT1>: ${{needs.job1.outputs.output1}}
              run: echo "$OUTPUT1 $OUTPUT2"


*/
