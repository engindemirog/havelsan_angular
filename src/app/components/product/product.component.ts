import { Product2 } from './../../models/product copy';


import { NotificationService } from './../../services/notification.service';
import { CartService } from './../../services/cart.service';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product2[];
  isLoading: boolean = true;
  filterText:string="";
  product:Product2;
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

  add(){
    // if(this.productAddform.valid){
    //   this.productService.add(this.product).subscribe(data=>{
    //     this.notificationService.success("eklendi");
    //   })
    // }
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
