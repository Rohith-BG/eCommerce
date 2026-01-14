import mongoose from "mongoose";
import razorpay from "../configs/razorPay.js";
import Orders from "../models/ordersModel.js";
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

export async function createOrder(orderId){
    try{
        const order = await Orders.findById(orderId)
        if(!order){
            throw Object.assign(new Error(`order not found`),{statusCode:404})
        }
        const amount = order?.total 

        if(!amount || amount<=0){
            throw Object.assign(new Error(`Invalid amount`),{statusCode:400})
        }

        const razorpayOrder = await razorpay.orders.create({
            amount:amount*100,
            currency:"INR"
        });

        if(!razorpayOrder){
            throw Object.assign(new Error(`Razorpay instance order failed to create`),{statusCode:400})
        }
        return razorpayOrder;
    }
    catch(err){
        throw err  
    }
}

export function verifyPaymentSignature(razorpayOrderId,paymentId,signature){
    try{
        if(!process.env.RAZORPAY_KEYSECRET){
            throw new Error(`environment variable is not configured`)
        }
        
        const hmac = crypto.createHmac('sha256',process?.env?.RAZORPAY_KEYSECRET);

        hmac.update(razorpayOrderId+"|"+paymentId)
        
        const generatedSignature = hmac.digest("hex")

        if(generatedSignature !== signature ){
            return false;
        }

        return true ;
    }
    catch(err){
        throw err
    }
}

export async function verifyPaymentTransaction(paymentDetails){
    const session = await mongoose.startSession()
    try{
        const {orderId,razorpayOrderId,paymentId,signature} = paymentDetails ;

        if(!verifyPaymentSignature(razorpayOrderId,paymentId,signature)){
            throw Object.assign(new Error(`Failed to verify the Signature`),{statusCode:400})
        }    
        session.startTransaction();

        await Orders.findByIdAndUpdate(orderId,{$set:{orderStatus:"INITIATED"}},{session})

        await Payment.findOneAndUpdate({orderId:orderId},{$set:{paymentStatus:"PAID"}},{session})

        await session.commitTransaction();

        return true;
        
    }
    catch(err){
        await session.abortTransaction();
        throw err ;
    }
    finally{
        session.endSession();
    }
}