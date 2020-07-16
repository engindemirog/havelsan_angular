import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CategoryService } from './services/category.service';
import { AdminModule } from './modules/admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { NavComponent } from './components/nav/nav.component';
import { VatPipe } from './pipes/vat.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { WordComponent } from './components/word/word.component';
import { GlobalizationPipe } from './pipes/globalization.pipe';
import { ProductComponent } from './components/product/product.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CartCompleteComponent } from './components/cart-complete/cart-complete.component';
import { LoginComponent } from './components/login/login.component';
import { BaseComponent } from './components/base/base.component';
import { SaveButtonDirective } from './directives/save-button.directive';
import { TableOrderDirective } from './directives/table-order.directive';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavComponent,
    VatPipe,
    ProductFilterPipe,
    WordComponent,
    GlobalizationPipe,
    ProductComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CartCompleteComponent,
    LoginComponent,
    SaveButtonDirective,
    TableOrderDirective,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

//global instance