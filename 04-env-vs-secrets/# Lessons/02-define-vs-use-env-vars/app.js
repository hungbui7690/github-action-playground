/*
  ENV
  - data/database.js
      process.env.MONGODB_CLUSTER_ADDRESS;
      process.env.MONGODB_USERNAME;
      process.env.MONGODB_PASSWORD;
      process.env.MONGODB_DB_NAME;
  - app.js -> process.env.PORT
  - playwright.config.js -> process.env.PORT



\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Providing Environment Variable Values
  - https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables
  - Workflow Level: available in all jobs
  - Job Level: available in all steps
  - Step Level: available in the current step


------------------------

  - define and access env variables
    -> these are runner env variables

      name: Greeting on variable day
      on:
        workflow_dispatch
      env:
        <DAY_OF_WEEK>: Monday -> 🌲 Workflow Level
      jobs:
        greeting_job:
          runs-on: ubuntu-latest
          env:
            <Greeting>: Hello -> 🎈 Job Level
          steps:
            - name: "Say Hello Mona it's Monday"
              run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!" -> ❎ access env variables
              env:
                <First_Name>: Mona -> 🍖 Step Level


------------------------

  - access using env context 
    -> instead of using $VAR -> we use ${{ env.VAR }}

      name: Conditional env variable
      on: workflow_dispatch
      env:
        <DAY_OF_WEEK>: Monday

      jobs:
        greeting_job:
          runs-on: ubuntu-latest
          env:
            Greeting: Hello
          steps:
            - name: "Say Hello Mona it's Monday"
              if: ${{ <env.DAY_OF_WEEK> == 'Monday' }}
              run: echo "${{ <env.Greeting> }} ${{ <env.First_Name> }}. Today is ${{ <env.DAY_OF_WEEK> }}!"
              env:
                First_Name: Mona



*/

import bodyParser from 'body-parser'
import express from 'express'

import eventRoutes from './routes/events.js'

const app = express()

app.use(bodyParser.json())

app.use(eventRoutes)

app.listen(process.env.PORT)
