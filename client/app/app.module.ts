import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/navbar/nav.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductsComponent, NavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
