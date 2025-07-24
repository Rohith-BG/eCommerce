import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders'
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
        default:'INITIATIED'
    },
})

 const Shipment = mongoose.model('Shipment',shipmentSchema);

 export default Shipment ;