import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orders',
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    quantity:{
        type:Number,
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
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedBy:{
        type:String,
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
})

const orderItem = mongoose.model('orderItem',orderItemSchema);

export default orderItem;

