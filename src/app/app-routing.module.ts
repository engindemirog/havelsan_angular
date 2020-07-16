import { PageCompletedGuard } from './guards/page-completed.guard';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { WordComponent } from './components/word/word.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartCompleteComponent } from './components/cart-complete/cart-complete.component';


const routes: Routes = [
  {path:"",component:ProductComponent,pathMatch:"full"},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryid",component:ProductComponent},
  {path:"words",component:WordComponent},
  {path:"cartdetail",component:CartDetailComponent},
  {path:"cartcomplete",component:CartCompleteComponent, canActivate:[LoginGuard], canDeactivate:[PageCompletedGuard]},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
