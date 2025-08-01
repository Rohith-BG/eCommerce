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
    method:{
        type:String,
        reqired:true
    },
    details:{
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

const Payment = mongoose.model('Payment',paymentSchema);

export default Payment ;