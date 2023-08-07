import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.DB_HOST}/hospitaldb`, {})
    console.log('Conectado a la base de datos correctamente hospitaldb')
  } catch (err) {
    console.error(err)
  }
}

mongoose.set('strictQuery', false)

connectDB()