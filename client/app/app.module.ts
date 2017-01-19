import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';
import { AppRoutingModule }       from './app-routing.module';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';


import { AppComponent }           from './app.component';
import { ProductsComponent }      from './components/products/products.component';
import { LoginComponent }         from './components/login/login.component';
import { ProductComponent }       from './components/product/product.component';
import { NewProductComponent }    from './components/newproduct/newproduct.component';
import { NavComponent }           from './components/navbar/nav.component';
import { AlertComponent }         from './components/alert/alert.component';
import { RegisterComponent }      from './components/register/register.component';

import { AuthenticationService }  from './services/auth.service';
import { AlertService }           from './services/alert.service';
import { UserService }            from './services/user.service';
import { ProductService }         from './services/products.service';



@NgModule({
  imports:      [ BrowserModule, RouterModule, AppRoutingModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProductsComponent, NavComponent, ProductComponent, NewProductComponent, LoginComponent, AlertComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthenticationService, AlertService, UserService, ProductService ]
})
export class AppModule { }
