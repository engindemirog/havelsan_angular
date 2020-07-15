import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { WordComponent } from './components/word/word.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:ProductComponent,pathMatch:"full"},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryid",component:ProductComponent},
  {path:"words",component:WordComponent},
  {path:"cartdetail",component:CartDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
