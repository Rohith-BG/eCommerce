import express from 'express'
import cors from 'cors'
const app = express();
import userRoute from './routes/userRoute.js';

app.use(express.json());
app.use(cors());

app.use('/user',userRoute);

export default app;