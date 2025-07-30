import express from 'express'
import { createOrderItem, deleteOrderItem, getOrderItem, updateOrderItem } from '../controllers/orderItemController.js'
const router = express.Router()

router.post('/',createOrderItem)

router.get('/',getOrderItem)

router.put('/',updateOrderItem)

router.delete('/',deleteOrderItem)

export default router