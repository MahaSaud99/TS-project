import express from 'express'
import { connectDB } from './config/db';
import userRouter from './routes/user.route';

const app=express();


// method 
connectDB()


//middleware
app.use(express.json);
app.use('/api/v1/user', userRouter)


const PORT= process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log("Server is running in port "+ PORT);
})