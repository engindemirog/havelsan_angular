import { Product } from './product';
export class CartItem {
    product:Product;
    quantity:number;

    
    
    public get getCartItemTotal() : number {
        return this.product.unitPrice * this.quantity;
    }
    
    
}
