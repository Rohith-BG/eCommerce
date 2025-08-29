import mongoose from "mongoose";
import Orders from "./ordersModel.js";

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

async function calculateOrderTotal(orderId) {
    const order = await mongoose.model("OrderItem").aggregate([
      { $match: { orderId: new mongoose.Types.ObjectId(orderId) } },
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ["$priceAtPurchase", "$quantity"] } }
        }
      }
    ]);
  
    const total = order[0]?.total || 0;
    await Orders.findByIdAndUpdate(orderId, { total });
}

orderItemSchema.post(["save","remove"],function(){
    calculateOrderTotal(this.orderId)
})

const OrderItem = mongoose.model('OrderItem',orderItemSchema);

export default OrderItem;

