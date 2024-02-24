import { NextFunction, Request, Response } from "express";
import jwt,{JwtPayload} from 'jsonwebtoken'
import { Types} from "mongoose";

export default (dependencies: any) => {
    const {cartUsecases:{addToCartUsecase}} = dependencies;
    if(!addToCartUsecase){
        throw new Error('Dependency not found. "addToCartUsecase" is required');
    }

    const addToCart = async (
        req: Request,res: Response, next: NextFunction
    ) => {
        try {
            if(!req.cookies.auth){
                res.status(404).json({message:"log in to view cart details"})
            }else{
                const decoded= jwt.verify(req.cookies.auth,"qwertyuio123456789") as JwtPayload;
                console.log(decoded)
                req.body.userId=decoded._id
                const cart = await addToCartUsecase(dependencies).interactor(req.body)

                if(!cart) {
                    throw new Error("adding product to  the cart failed");
                }
    
                res.status(201).json({success:true, data: cart,message:"Product added to cart successfully"})
            }
            
        } catch (error) {
            next(error)
        }
    }
    return addToCart;
}