import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orders'
    },
    address:{
        type:String,
        required:true
    },
    addressType:{
        type:String,
        required:true
    },
    estimatedDeliveryDate:{
        type:Date,
    },
    shipmentStatus:{
        type:String,
        default:'initiatied'
    },
})

 const shipment = mongoose.model('shipment',shipmentSchema);

 export default shipment ;