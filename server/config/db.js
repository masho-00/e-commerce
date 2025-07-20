import colors from  'colors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('<<<<<< MongoDB Connected! >>>>>>'.cyan.underline)
    } catch (error) {
        console.error('MongoDB Disconnected!', 'Error:'.red.underline.bold)
        process.exit(1)
    }
}
export default connectDB