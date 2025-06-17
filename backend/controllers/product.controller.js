import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const CreateProduct=async(req,res)=>{
    const product=req.body;//user will send this data 

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message: "Please provide all fields"});
    }
    const newProduct =new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }
    catch(error){
        console.error("Error in create product",error.message);
        res.status(500).json({success:false,message:"Server errror"});

    };
    
}
export const getProducts=async(req,res)=>{
    try{
        const products =await Product.find({});
        res.status(200).json({success:true,data:products});

    }
    catch(error){
        console.log("Error in fetching products",error.message);
        res.status(500).json({success:false,message:"Server error"});

    }
}
export const updateProduct=async(req,res)=>{
    const {  id} =req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({success:false,message:"Invalid product id"});
    }
    try{
        const updatedproduct= await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedproduct});
    }
    catch(error){
        res.status(500).json({success:false,message:"Server error"});   

    }
}
export const DeleteProduct= async (req, res) => {
    const { id } = req.params;
     if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({success:false,message:"Invalid product id"});
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}