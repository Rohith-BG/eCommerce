import mongoose from 'mongoose'

const checkDbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    }
    catch(err){
        console.log(err.message);
    }
}

export default checkDbConnection ;