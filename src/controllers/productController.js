import { createProductService, deleteProductService, getAllProductService, updateProductService } from "../services/productService.js";


export async function createProduct (req,res){
    try{
        const productObj = req.body;
        const newProduct = await createProductService(productObj);
        res.status(201).json({'Product Created':newProduct});
    }
    catch(err){
        res.json(400).json(err.stack);
    }

}

export async function getAllProducts(req,res){
    try{
        const availableProducts = await getAllProductService();
        res.status(200).json({"Products":availableProducts})  
    }catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateProduct(req,res){
    try{
        const productId = req.params.id;
        console.log(productId)
        const updateDetails = req.body;
        const updatedProduct = await updateProductService(productId,updateDetails);
        res.status(200).json({'message':updatedProduct})
    }
    catch(err){
        console.log(err.stack)
        res.status(500).json(err.stack)
    }
}

export async function deleteProduct(req,res){
    try{
        const prodctId=req.params.id;
        const deletedUser = await deleteProductService(prodctId);
        res.status(200).json({"Deleted User":deletedUser});
    }
    catch(err){
        res.status(500).json(err.stack);
    }
}