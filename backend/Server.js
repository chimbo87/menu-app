import  express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port= process.env.PORT;
import userRoutes from './routes/userRoutes.js';

import connectBD from "./config/db.js";
connectBD();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/',(req, res) => res.send('server is ready !'));
app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>console.log(`server started on port${port}`))