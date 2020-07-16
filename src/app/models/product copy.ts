import { RequiredValidator, MinLengthValidator } from '@angular/forms';


export interface Product2 {
    productId:number;
    categoryId:number;
    productName:string;
    quantityPerUnit:string;
    unitPrice:number;
    unitsInStock:number;
    
}
