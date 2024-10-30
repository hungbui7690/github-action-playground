/*
  Adding Inputs to Reusable Workflows
  - https://docs.github.com/en/actions/sharing-automations/reusing-workflows#using-inputs-and-secrets-in-a-reusable-workflow

  - <reusable.yml>
    -> define inputs

  - <caller.yml> 
    jobs:
      <build>: 
        - name: Upload artifacts
          uses: actions/upload-artifact@v3
          with:
            <name>: dist-files
            path: dist


*/
