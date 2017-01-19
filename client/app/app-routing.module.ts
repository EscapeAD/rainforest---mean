import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { NewProductComponent } from './components/newproduct/newproduct.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductsComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: RegisterComponent },
  { path: 'products/new',  component: NewProductComponent },
  { path: 'products/:id',  component: ProductComponent },
  { path: '**', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
