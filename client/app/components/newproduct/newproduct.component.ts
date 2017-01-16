import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form }  from '@angular/forms';

import { ProductService } from '../../services/products.service';
import { Product } from '../../interface/product';


@Component({
  moduleId: module.id,
  selector: 'newproduct',
  templateUrl: 'newproduct.component.html',
  providers: [ProductService]
})
export class NewProductComponent {
product: Product
name: string
description: string
price: number

  constructor(private productService: ProductService, private router: Router
  ){

  }

  addProduct(event:any){
    event.preventDefault();
    let newProduct = {
      name: this.name,
      description: this.description,
      price: this.price
    }
    this.productService.addProduct(newProduct)
                       .subscribe( data =>{
                         this.router.navigate(['/products']);
                       })
  }
}
