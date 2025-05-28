import { create,  deletion, getAll, update } from "../services/categoryService.js";


export async function createCategory (req,res){
    try{
        const categoryObj = req.body;

        const newCategory = await create(categoryObj);

        res.status(201).json({"Created Category":newCategory});
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function getAllCategory(req,res){
    try{
        const availableCategories = await getAll();

        res.status(200).json({Categories:availableCategories});
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateCategory (req,res){
    try{
        const categoryId = req.params.id;
        const updateDetails = req.body;

        const updatedCategory = await update(categoryId,updateDetails);

        res.status(200).json({"Updated Category":updatedCategory})
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}


export async function deleteCategory (req,res){
    try{
        const categoryId = req.params.id;
        
        await deletion(categoryId);

        res.status(200).json({'message':'Category deleted successfully'})
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}