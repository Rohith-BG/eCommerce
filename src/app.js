import express from 'express'
import cors from 'cors'
const app = express();
import userRoute from './routes/userRoute.js';
import partnerRoute from './routes/partnerRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import ordersRoute from './routes/ordersRoute.js'
import orderItemRoute from './routes/orderItemRoute.js'
import paymentRoute from './routes/paymentRoute.js'
import shipmentRoute from './routes/shipmentRoute.js'

app.use(express.json());
app.use(cors());

app.use('/users',userRoute);
app.use('/partners',partnerRoute);
app.use('/categories',categoryRoute);
app.use('/products',productRoute);
app.use('/orders',ordersRoute);
app.use('/orderItems',orderItemRoute);
app.use('/payments',paymentRoute);
app.use('/shipments',shipmentRoute);

export default app;
