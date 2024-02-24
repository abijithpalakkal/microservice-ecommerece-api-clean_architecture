import mongoose from "mongoose";

export default async () => {
    require('dotenv').config()
    console.log(process.env.MONGO_URL)
    try {
         
        await mongoose.connect("mongodb://127.0.0.1:27017/cart-microservice")

        console.log('db service connected ');   

    } catch (error: any) {
        console.log(error?.message);
        throw new Error("User service Database connection failed")
    }
}