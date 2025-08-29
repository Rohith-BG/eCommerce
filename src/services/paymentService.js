import razorpay from "../configs/razorPay.js";
import Payment from "../models/paymentModel.js";
import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config();

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

export async function createOrder(orderData){
    try{
        const {amount,currency} = orderData;
        const order = await razorpay.orders.create({
            amount:amount*100,
            currency
        });

        if(!order){
            throw Object.assign(new Error(`Razorpay order instance failed to create`),{statusCode:400})
        }
        return order;
    }
    catch(err){
        console.log(err);
        throw err
        
    }
}

export async function verifyPaymentById(orderId,paymentId,signature){
    try{
        const hmac = crypto.createHmac('sha256',process.env.RAZORPAY_KEYSECRET);

        hmac.update(orderId+"|"+paymentId)
        
        const generatedSignature = hmac.digest("hex")

        if(generatedSignature == signature ){
            return true 
        }
        else{
            throw Object.assign(new Error(`Payment failed`),{statusCode:400})
        }
    }
    catch(err){
        throw err
    }
}