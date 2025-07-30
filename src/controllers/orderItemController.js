import { getOrderItemById, insertOrderItem, updateOrderItemById ,deleteOrderItemById } from '../services/orderItemService.js'

export async function createOrderItem(req,res){
    try{
        const orderItemData = req?.body ;
        if(!orderItemData){
            throw Object.assign(new Error(`fields are mandatory`),{statusCode:400})
        }
        const orderItem = await insertOrderItem(orderItemData);

        res.status(201).json(orderItem);

    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function getOrderItem(req,res){
    try{
        const orderItemId = req?.query?.id 
        if(!orderItemId){
            throw Object.assign(new Error(`orderItemId is a requried field`),{statusCode:400})
        }
        const orderItem = await getOrderItemById(orderItemId);

        res.status(200).json(orderItem)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function updateOrderItem (req,res){
    try{
        const orderItemId = req?.query?.id;
        if(!orderItemId){
            throw Object.assign(new Error(`orderItemId is a required field`),{statusCode:400})
        }

        const updateData = req?.body;

        if(!updateData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }

        const orderItem = await updateOrderItemById(orderItemId,updateData);

        res.status(200).json(orderItem)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function deleteOrderItem(req,res){
    try{
        const orderItemId = req?.query?.id ;
        if(!orderItemId){
            throw Object.assign(new Error(`orderItemId is a required field`))
        }
        const orderItem = await deleteOrderItemById(orderItemId);
        
        res.status(200).json(orderItem)
    }
    catch(err){
        req.status(err.statusCode).json(err.stack)
    }
}