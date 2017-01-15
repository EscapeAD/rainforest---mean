import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { NewProductComponent } from './components/newproduct/newproduct.component';
import { NavComponent } from './components/navbar/nav.component';


@NgModule({
  imports:      [ BrowserModule, RouterModule, AppRoutingModule ],
  declarations: [ AppComponent, ProductsComponent, NavComponent, ProductComponent, NewProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
