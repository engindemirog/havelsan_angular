import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

}
