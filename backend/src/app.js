import express from 'express'
import cors from 'cors'
import { postsRoutes } from './routes/posts.js'

const app = express()

app.use(express.json())
app.use(cors())

// add root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

postsRoutes(app)

export { app }
