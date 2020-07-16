import { Product2 } from './../../models/product copy';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() selectedItem:Product2;
  constructor() { }

  ngOnInit(): void {
  }

}
