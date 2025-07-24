import express from 'express'
import { createPayment, deletePayment, getPayment ,updatePayment} from '../controllers/paymentController.js'

const router = express.Router()

router.post('/',createPayment)

router.get('/',getPayment)

router.put('/',updatePayment)

router.delete('/',deletePayment)

export default router