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

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.path);
  }

  getProductsByCategory(categoryId:number){
    let newPath =this.path;
    newPath = newPath + "?categoryId="+categoryId;
    return this.httpClient.get<Product[]>(newPath);
  }
}
