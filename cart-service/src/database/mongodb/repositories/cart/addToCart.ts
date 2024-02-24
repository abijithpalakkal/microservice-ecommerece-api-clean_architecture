import { Cart } from "../../models/cart";
import { CartEntity } from "../../../../entities";
import { Types } from "mongoose";

export const addToCart = async (data:
    {
        userId: Types.ObjectId,
        productId: Types.ObjectId,
        quantity: number
    }
    ): Promise<CartEntity | null> => {
        try {
            console.log(data,"665665336")
            const existingCart = await Cart.findOne({userId: data.userId})
            if(!existingCart) {
                const newCart = await Cart.create({
                    userId: data.userId,
                    
                        productId: data.productId,
                        quantity: data.quantity
                    
                })
                if(!newCart) {
                    throw new Error("Adding Product to cart failed")
                }
                return newCart as CartEntity
            }else{
                throw new Error("product already in the cart")
            }
              
            
        } catch (error: any) {
            throw new Error(error?.message)
        }
    }