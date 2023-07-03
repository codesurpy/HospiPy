import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/User.routes.js'
import './config/connectDB.js'
import authRouter from './routes/Auth.routes.js'

const app = express()
dotenv.config()

//middlewares
app.use(cors())
app.use(express.json());

//routes Addresses
app.use('/api', authRouter)
app.use('/api', userRouter)

//Listen to port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`The server is running on the port ${port}`)
})

