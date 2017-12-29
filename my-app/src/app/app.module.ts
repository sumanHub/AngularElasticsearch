import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ElasticsearchService } from './elasticsearch.service';


import {ProductDetailsComponent } from './product/product-details/product-details.component';
import { SearchProductsComponent } from './product/search-products/search-products.component';

@NgModule({
  declarations: [
    AppComponent,
  
   
    ProductDetailsComponent,
    SearchProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
