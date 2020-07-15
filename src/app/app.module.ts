import { CategoryService } from './services/category.service';
import { AdminModule } from './modules/admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
    CartCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//global instance