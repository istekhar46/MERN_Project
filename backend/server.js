import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
dotenv.config();


const port =  process.env.PORT;
const app = express()
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.get('/',(req, res)=>{
    res.send ("Hello server!!")
})

app.use('/api/users', userRoutes)


// using middleware here ....

app.use(notFound);
app.use(errorHandler);

app.listen (port, ()=> console.log(`Server is running on the port http://localhost:${port}`))