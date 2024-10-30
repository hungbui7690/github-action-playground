/*
  2 types of secrets:
  - environment secrets
  - repo secrets


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  REPO SECRETS
  - <deploy.yml>
  - we don't want to store ENV directly in our code 
    -> use secrets

------------------------

  - Settings -> Secrets & Variables -> Repo Secrets


------------------------

  - create MONGODB_USERNAME and MONGODB_PASSWORD in repo secrets
  - <deploy.yml> file
      jobs:
      test:
        env:
          <MONGODB_USERNAME>: ${{ secrets.MONGODB_USERNAME}} 
          <MONGODB_PASSWORD>: ${{ secrets.MONGODB_PASSWORD }}


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  ENVIRONMENT SECRETS
  - Settings -> Environments
    # add 
    # add environment secrets
    
  - <deploy.yml> file
      jobs:
        test:
          <environment>: testing
          env:
            MONGODB_USERNAME: ${{ secrets.MONGODB_USERNAME}} # DON'T WRITE DIRECTLY HERE -> BUT USE SECRETS
            MONGODB_PASSWORD: ${{ secrets.MONGODB_PASSWORD }}
            PORT: 8080
    -> these secrets refers to the environment secrets


*/

import bodyParser from 'body-parser'
import express from 'express'

import eventRoutes from './routes/events.js'

const app = express()

app.use(bodyParser.json())

app.use(eventRoutes)

app.listen(process.env.PORT)
