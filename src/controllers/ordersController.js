import { deleteOrderById, getOrderById, insertOrder, updateOrderById } from "../services/ordersService.js"

export async function createOrder(req,res){
    try{
        const orderData = req?.body
        if(!orderData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }
        const order = await insertOrder(orderData)

        res.status(201).json(order)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function getOrder(req,res){
    try{
        const orderId = req?.query?.id
        if(!orderId){
            throw Object.assign(new Error(`orderId is a required field`),{statusCode:400})
        }
        const order = await getOrderById(orderId)
        res.status(200).json(order)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function updateOrder(req,res){
    try{
        const orderId = req?.query?.id
        if(!orderId){
            throw Object.assign(new Error(`orderId is a required field`),{statusCode:400})
        }
        const updateData = req?.query?.id
        if(!updateData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }
        const order = await updateOrderById(orderId,updateData)
        res.status(200).json(order)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function deleteOrder(req,res){
    try{
        const orderId = req?.query?.id
        if(!orderId){
            throw Object.assign(new Error(`orderId is a required field`),{statusCode:400})
        }
        const order = await deleteOrderById(orderId)
        res.status(200).json(order)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}