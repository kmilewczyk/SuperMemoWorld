export class CartGetResult {
    id: number;
    userId: number;
    date: Date;
    products: {
        productId: number,
        quantity: number,
    }[];
    __v: number;
}