import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import userRoutes from './routes/user';

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();


// All App Routes 
const BaseURL = '/api/v1';
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

// User routes
app.use(`${BaseURL}/auth`, userRoutes);


const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
    app.listen(port , () => console.log(`server listening on ${port}`));
})
