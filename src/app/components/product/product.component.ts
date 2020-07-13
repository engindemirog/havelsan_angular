import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  isLoading: boolean = true;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
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
}
