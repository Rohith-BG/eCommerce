import express from 'express'
import cors from 'cors'
const app = express();
import userRoute from './routes/userRoute.js';
import partnerRoute from './routes/partnerRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.use('/user',userRoute);
app.use('/partner',partnerRoute);
app.use('/',categoryRoute);
app.use('/product',productRoute);
=======
app.use('/users',userRoute);
app.use('/partners',partnerRoute);
app.use('/categories',categoryRoute);
app.use('/products',productRoute);
>>>>>>> e212267 (Updated the naming convention's)

export default app;
