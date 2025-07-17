import express from "express"
import { createCategory, deleteCategory, getAllCategory, readCategories, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();
// name the routes in the plural names that should specify what they are 
// Don't use the verb or a CRUD operation function names bcz the verb is already specified by the http methods
router.post('/categories',createCategory)

router.get('/categories',readCategories);

router.put('/categories',updateCategory);

router.delete('/categories',deleteCategory);

export default router

