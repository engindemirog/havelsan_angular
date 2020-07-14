import { CartItems } from './../models/cart-items';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let addedItem = CartItems.find(c=>c.product.id===product.id);

    if(addedItem){
      addedItem.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}
