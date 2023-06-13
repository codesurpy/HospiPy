import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/User.routes.js'

const app = express()
dotenv.config()

//middlewares
app.use(cors({
  credentials: true,
  origin: process.env.LOCAL_HOST
}))
app.use(express.json());

//routes Addresses
app.use('/api', router)

//Listen to port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`The server is running on the port ${port}`)
})

