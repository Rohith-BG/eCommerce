import Payment from "../models/paymentModel.js";

export async function insertPayment(paymentData){
    try{
        const payment  = await Payment.create(paymentData)

        if(!payment){
            throw Object.assign(new Error(`failed to create a payment`),{statusCode:400})
        }
        return payment
    }
    catch(err){
        throw err
    }
}

export async function getPaymentById(paymentId){
    try{
        const payment = await Payment.findById(paymentId)

        if(!payment){
            throw Object.assign(new Error(`payment not found`),{statusCode:404})
        }
        return payment;
    }
    catch(err){
        throw err
    }
}

export async function updatePaymentById(paymentId,paymentData){
    try{
        const payment = await Payment.findByIdAndUpdate(paymentId,paymentData,{new:true})
        if(!payment){
            throw Object.assign(new Error(`payment not found`),{statusCode:404})
        }
        return payment
    }
    catch(err){
        throw err
    }
}

export async function deletePaymentById(paymentId){
    try{
        const payment = await Payment.findByIdAndDelete(paymentId);
        if(!payment){
            throw Object.assign(new Error(`payment not found`),{statusCode:404})
        }
        return payment
    }
    catch(err){
        throw err;
    }
}