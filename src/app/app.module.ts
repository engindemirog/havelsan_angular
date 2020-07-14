import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavComponent } from './components/nav/nav.component';
import { VatPipe } from './pipes/vat.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { WordComponent } from './components/word/word.component';
import { GlobalizationPipe } from './pipes/globalization.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavComponent,
    VatPipe,
    ProductFilterPipe,
    WordComponent,
    GlobalizationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
