import { Types } from "mongoose";

export interface CartEntity{
    userId: Types.ObjectId;
    
    productId: Types.ObjectId,
    quantity: Number
    }
