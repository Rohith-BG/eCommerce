import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orders',
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    paymentMethod:{
        type:String,
        reqired:true
    },
    paymentDetails:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        default:'pending'
    },
    paidAt:{
        type:Date,
        default:Date.now
    }

})

const payment = mongoose.model('payment',paymentSchema);

export default payment ;