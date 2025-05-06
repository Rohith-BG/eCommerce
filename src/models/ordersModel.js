import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    orderStatus:{
        type:String,
        default:'PENDING'
    },
    total:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
})

const orders = mongoose.model('orders',ordersSchema);

export default orders;