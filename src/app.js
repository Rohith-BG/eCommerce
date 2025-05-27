import express from 'express'
import cors from 'cors'
const app = express();
import userRoute from './routes/userRoute.js';
import partnerRoute from './routes/partnerRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'

app.use(express.json());
app.use(cors());

app.use('/user',userRoute);
app.use('/partner',partnerRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);

export default app;