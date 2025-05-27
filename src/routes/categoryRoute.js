import express from "express"
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/addCategory',createCategory)

router.get('/getAll',getAllCategory);

router.put('/update/:id',updateCategory);

router.delete('/delete/:id',deleteCategory);

export default router

