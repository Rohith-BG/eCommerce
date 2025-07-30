import express from 'express'
import { createOrder, deleteOrder, getOrder, updateOrder } from '../controllers/ordersController.js'
const router = express.Router()

router.post('/',createOrder)

router.get('/',getOrder)

router.put('/',updateOrder)

router.delete('/',deleteOrder)

export default router

