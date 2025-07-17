import { deleteCategoryById,  getAllCategories, insertCategory, modifyCategoryById } from "../services/categoryService.js";


export async function createCategory (req,res){
    try{
        const categoryData = req.body;

        const category = await insertCategory(categoryData);

        res.status(201).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function readCategories(req,res){
    try{
        const categories = await getAllCategories();

        res.status(200).json(categories);
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateCategory (req,res){
    try{
        const categoryId = req.query.id;
        const updateDetails = req.body;

        const category = await modifyCategoryById(categoryId,updateDetails);

        res.status(200).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}


export async function deleteCategory (req,res){
    try{
        const categoryId = req.query.id;
        
        const category = await deleteCategoryById(categoryId);

        res.status(200).json(category);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

/*
Naming a function names for the CRUD operation 
follow this at first take a operation name that you are implementing
 e.g creating a new resource i.e is create operation so name as create 
then followed by which you have to name the entityName you are acting upon 
 i.e your are creating a new category right then as above use create followed by 
 add the category so the function will be named as the createCategory 
 
then for the variables in the functions you have to name them specifcally what 
it should represent name accordingly 

in service layer naming a function names should be improved by
naming the insert<name> for creating , get<name> for retrival / reading , 
modify<name> or update<name>ById for updation , 
delete<name>ById , remove<name> for deletion

Follow this for a good practises

*/