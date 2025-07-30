import OrderItem from '../models/orderItemModel.js'

export async function insertOrderItem(orderData){
    try{
        const orderItem = await OrderItem.create(orderData) 
    
        if(!orderItem){
            throw Object.assign(new Error("Failed to create"),{statusCode:400})
        }

        return orderItem ;
    }
    catch(err){
        throw err ;
    }
}

export async function getOrderItemById(oderItemId){
    try{
        const orderItem = await OrderItem.findById(orderItemId)

        if(!orderItem){
            throw Object.assign(new Error(`orderItem not found`),{statusCode:404})
        }

        return orderItem ;
    }
    catch(err){
        throw err;
    }
}  

export async function updateOrderItemById(orderItemId,updateData){
    try{
        const orderItem = await OrderItem.findByIdAndUpdate(orderItemId,updateData,{new:true})

        if(!orderItem){
            throw Object.assign(new Error(`orderItem not found`),{statusCode:404})
        }

        return orderItem ;
    }
    catch(err){
        throw err;
    }
}

export async function deleteOrderItemById(orderItemId){
    try{
        const orderItem = await OrderItem.findByIdAndDelete(orderItemId);

        if(!orderItem){
            throw Object.assign(new Error(`orderItem not found`),{statusCode:404})
        }

        return orderItem ;
    }
    catch(err){
        throw err ;
    }
}
