import mongoose from "mongoose"


export default async()=>{
    require("dotenv").config()
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/product_ecommerce")
    console.log("poli")
  }catch(error:any){
    console.log(error?.message)
  }
}