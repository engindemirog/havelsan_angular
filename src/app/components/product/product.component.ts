import { NotificationService } from './../../services/notification.service';
import { CartService } from './../../services/cart.service';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  isLoading: boolean = true;
  filterText:string="";
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService:CartService,
    private notificationService:NotificationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryid']) {
        this.getProductsByCategory(params['categoryid']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }

  getProductsByCategory(categoryId) {
    this.productService.getProductsByCategory(categoryId).subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }

  addToCart(product:Product){
     this.cartService.addToCart(product);
     this.notificationService.success(product.productName + " sepete eklendi");
  }
}
