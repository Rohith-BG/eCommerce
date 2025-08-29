import express from 'express'
import { createPayment, createRazorpayOrder, deletePayment, getPayment ,updatePayment, verifyPayment} from '../controllers/paymentController.js'

const router = express.Router()

router.post('/',createPayment)

router.get('/',getPayment)

router.put('/',updatePayment)

router.delete('/',deletePayment)

router.post('/checkout',createRazorpayOrder)

router.post('/verify',verifyPayment)

export default router