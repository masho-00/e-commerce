import express from 'express'
import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
// import crypto from 'crypto'

dotenv.config()
const app = express()
const port = process.env.PORT

//middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(cors({
    credentials:true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET','POST','PUT','DELETE','PATCH']
    
}));
app.use(helmet({
    crossOriginIsolated: true
}))
app.use(express.json())
connectDB()
app.use('/', authRoutes)
// function generateJwt(length =64){
//     return crypto.randomBytes(length).toString('hex');
    
// }
// const jwtSecret = generateJwt()
// console.log('jwt:', jwtSecret)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`.yellow.bold))