import express from 'express'
import router from './routes'
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT

app.use(router)

app.listen(port, () => {
  console.log(`Server listening on ${port}...`)
})
