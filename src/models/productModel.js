import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    productDetails:{
        type:String,
        required:true
    },
    stockQuantity:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    soldBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'partner',
        required:true
    }
},
{timestamps:true});

const product = mongoose.model('product',productSchema);

export default product;