import { Product } from "./product.model";
import { User } from "./user.model";

export class Cart {
    id: number;
    userId: number;
    user: User;
    date: Date;
    products: {
        productId: number;
        quantity: number,
    }[];
    __v: number;
}