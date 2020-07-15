import { RequiredValidator, MinLengthValidator } from '@angular/forms';


export interface Product {
    id:number;
    categoryId:number;
    productName:string;
    quantityPerUnit:string;
    unitPrice:number;
    unitsInStock:number;
    
}
