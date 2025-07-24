import { deletePaymentById, getPaymentById, insertPayment, updatePaymentById } from "../services/paymentService.js"

export async function createPayment(req,res){
    try{
        const paymentData = req?.body 
        if(!paymentData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }
        const payment = await insertPayment(paymentData);

        res.status(201).json(payment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function getPayment(req,res){
    try{
        const paymentId = req?.query?.id
        if(!paymentId){
            throw Object.assign(new Error(`paymentId is a required field`),{statusCode:400})
        }
        const payment = await getPaymentById(paymentId);

        res.status(200).json(payment)
    }
    catch(err){
        res.json(err.statusCode).json(err.stack)
    }
}

export async function updatePayment(req,res){
    try{
        const paymentId = req?.query?.id
        if(!paymentId){
            throw Object.assign(new Error(`paymentId is a required field`),{statusCode:400})
        }
        const updateData = req?.body
        if(!updateData){
            throw Object.assign(new Error(`fields are mandatory`),{statusCode:400})
        }

        const payment = await updatePaymentById(paymentId,updateData);

        res.status(200).json(payment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function deletePayment(req,res){
    try{
        const paymentId = req?.query?.id
        if(!paymentId){
            throw Object.assign(new Error(`paymentId is a required field`),{statusCode:400})
        }
        const payment = await deletePaymentById(paymentId)

        res.status(200).json(payment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}
