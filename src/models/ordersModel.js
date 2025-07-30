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
},
{timestamps:true});

const Orders = mongoose.model('Orders',ordersSchema);

export default Orders;