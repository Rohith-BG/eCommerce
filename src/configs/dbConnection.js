import mongoose from 'mongoose'

const checkDbConnection = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://Rohith:rohith@cluster0.k8amm.mongodb.net/ecom')
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
    }
}

export default checkDbConnection ;