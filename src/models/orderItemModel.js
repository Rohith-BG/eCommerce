import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders',
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    quantity:{
        type: Number,
        required:true
    },
    priceAtPurchase:{
        type:Number,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    updatedBy:{
        type:String,
        required:true
    },
},
{timestamps:true});

const OrderItem = mongoose.model('OrderItem',orderItemSchema);

export default OrderItem;

