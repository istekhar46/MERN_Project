import path from 'path'
import cors from 'cors'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import blogRoutes from "./routes/blogsRoutes.js"
dotenv.config();


const port = process.env.PORT;
const app = express()
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




// if (process.env.NODE_ENV === 'production') {
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));

//     app.get('*', (req, res) => res.sendFile((path.resolve(__dirname, 'frontend', 'dist', 'index.html'))));
// } else {
//     app.get('/', (req, res) => {
//         res.send("Hello server!!")
//     })
// }

app.get('/', (req, res) => {
            res.send("Hello server!!")
        })
    

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// using middleware here ....

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on the port http://localhost:${port}`))
