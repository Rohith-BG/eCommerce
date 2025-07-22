import { create , deleteTheProduct, getAll, update} from "../services/productService.js";


export async function createProduct(req,res){
    try{
        const productObj = req.body;
        const newProduct = await create(productObj);
        res.status(201).json({'Product Created':newProduct});
    }
    catch(err){
        res.json(400).json(err.stack);
    }

}

export async function getAllProducts(req,res){
    try{
        const availableProducts = await getAll();
        res.status(200).json({"Products":availableProducts})  
    }catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updateProduct(req,res){
    try{
        const productId = req.query.id;
        const updateDetails = req.body;
        const updatedProduct = await update(productId,updateDetails);
        res.status(200).json({'message':updatedProduct})
    }
    catch(err){
        res.status(400).json(err.stack)
    }
}

export async function deleteProduct(req,res){
    try{
        const productId=req.query.id;
        const deletedUser = await deleteTheProduct(productId);
        res.status(200).json({"Deleted User":deletedUser});
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}