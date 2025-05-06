import mongoose from "mongoose";
import Category from "./categoryModel.js";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    productDetails:{
        type:String,
        required:true
    },
    stockQuantity:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    createdAt:{
        type:Date,default:new Date.now
    },
    updatedAt:{
        type:Date,default:new Date.now
    }
})

const product = mongoose.model('product',productSchema);

export default product;