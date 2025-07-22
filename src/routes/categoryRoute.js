import express from "express"
import { createCategory, deleteCategory, readCategories, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/',createCategory)

router.get('/',readCategories);

router.put('/',updateCategory);

router.delete('/',deleteCategory);

export default router

