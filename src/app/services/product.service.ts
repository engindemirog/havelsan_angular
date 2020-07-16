import { Product2 } from './../models/product copy';

import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path = "http://localhost:3000/products"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product2[]>{
    return this.httpClient.get<Product2[]>("https://localhost:44335/api/products/getall");
  }

  getProductsByCategory(categoryId:number){
    let newPath =this.path;
    newPath = newPath + "?categoryId="+categoryId;
    return this.httpClient.get<Product2[]>(newPath);
  }

  add(product:Product){
    return this.httpClient.post<Product2>(this.path,product);
  }
}
