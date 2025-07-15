import { create,  deletion, getAll, update } from "../services/categoryService.js";


export async function createCategory (req,res){
    try{
        const categoryObj = req.body;

        const category = await create(categoryObj);

        return res.status(201).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function getAllCategory(req,res){
    try{
        const categories = await getAll();

        return res.status(200).json(categories);
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateCategory (req,res){
    try{
        const categoryId = req.query.id;
        const updateDetails = req.body;

        const updated = await update(categoryId,updateDetails);

        return res.status(200).json(updated);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}


export async function deleteCategory (req,res){
    try{
        const categoryId = req.query.id;
        
        const deleted = await deletion(categoryId);

        return res.status(200).json(deleted);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}