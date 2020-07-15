import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-cart-complete',
  templateUrl: './cart-complete.component.html',
  styleUrls: ['./cart-complete.component.css']
})
export class CartCompleteComponent implements OnInit {

  cartCompleteForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCartCompleteForm();
  }

  
  createCartCompleteForm(){
    this.cartCompleteForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
        lastName:["",[Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
        address:["",Validators.required],
        email:["",Validators.email]
      }
    )
  }

  get controls(){
    return this.cartCompleteForm.controls;
  }

  complete(){
    if(this.cartCompleteForm.valid){
       alert("bitti");
    }else{
      alert("form doğru değil");
    }
   
  }

}
