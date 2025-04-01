import express from 'express';
import mysql2 from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import authRouter from './routes/authRoutes.js'


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth', authRouter)

//TODO : CONNECT MYSQL DB TO HERE
/*const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: 'account'
})*/

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})