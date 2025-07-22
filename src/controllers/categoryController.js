import { deleteCategoryById, getCategories, updateCategoryById, insertCategory } from "../services/categoryService.js";


export async function createCategory (req,res){
    try{
        const categoryData = req?.body;

        const category = await insertCategory(categoryData);

        res.status(201).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function readCategories(req,res){
    try{
        const categories = await getCategories();

        res.status(200).json(categories);
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateCategory (req,res){
    try{
        const categoryId = req?.query?.id;
        const updateDetails = req?.body;

        const category = await updateCategoryById(categoryId,updateDetails);

        res.status(200).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}


export async function deleteCategory (req,res){
    try{
        const categoryId = req?.query?.id;
        
        const category = await deleteCategoryById(categoryId);

        res.status(200).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}