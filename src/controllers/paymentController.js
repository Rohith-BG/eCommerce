import { deletePaymentById, getPaymentById, insertPayment, createOrder, updatePaymentById, verifyPaymentTransaction } from "../services/paymentService.js"

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

export async function createRazorpayOrder(req,res){
    try{
        const orderId = req?.query?.id

        if(!orderId){
            throw Object.assign(new Error(`orderId is a required field`))
        }

        const order = await createOrder(orderId)

        res.status(200).json(order)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function verifyPayment(req,res){
    try{
        const {orderId,razorpayOrderId,paymentId,signature} = req?.body 

        if(!orderId ||!razorpayOrderId || !paymentId || !signature ){
            throw Object.assign(new Error(`Required Fields are missing`),{statusCode:400})
        }

        const paymentDetails = {
            orderId,
            razorpayOrderId,
            paymentId,
            signature
        }

        if(!verifyPaymentTransaction(paymentDetails)){
            throw Object.assign(`Can't validate the payment`,{statusCode:400})
        }else{
            res.status(200).json(`Payment is Successful`);
        }
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}
