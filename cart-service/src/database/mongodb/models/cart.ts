import  mongoose,{ Schema,Document, Types } from "mongoose";

export interface ICartSchema extends Document {
    userId: Types.ObjectId;
    
        productId: Types.ObjectId,
        quantity: Number
    
}

const CartSchema: Schema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
    },
   
    productId: {
    type: Types.ObjectId,
     required: true
    },
    quantity: {
    type: Number,
    required: true
    }
     
});

export const Cart = mongoose.model<ICartSchema>('carts',CartSchema)
