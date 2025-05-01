import app from './src/app.js'
import dotenv from 'dotenv'
import checkDbConnection from './src/configs/dbConnection.js';
dotenv.config();

checkDbConnection();

app.get('/',(req,res)=>{
    res.status(200).json({'message':'HI'})
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log('Server is running');
})