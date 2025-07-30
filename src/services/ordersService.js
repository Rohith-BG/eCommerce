import Orders from "../models/ordersModel.js";

export async function insertOrder(orderData){
    try{
        const order = await Orders.create(orderData);

        if(!order){
            throw Object.assign(new Error(`Failed to create an order`),{statusCode:400})
        }
        return order;
    }
    catch(err){
        throw err
    }
}

export async function getOrderById(orderId){
    try{
        const order = await Orders.findById(orderId)
        if(!order){
            throw Object.assign(new Error(`order not found`),{statusCode:404})
        }
        return order;
    }
    catch(err){
        throw err
    }
}

export async function updateOrderById(orderId,updateData){
    try{
        const order = await Orders.findByIdAndUpdate(orderId,updateData,{new:true})
        if(!order){
            throw Object.assign(new Error(`order not found`),{statusCode:404})
        }
        return order
    }
    catch(err){
        throw err
    }
}

export async function deleteOrderById(orderId){
    try{
        const order = await Orders.findByIdAndDelete(orderId);
        if(!order){
            throw Object.assign(new Error(`order not found`),{statusCode:404})
        }
        return order
    }
    catch(err){
        throw err
    }
}