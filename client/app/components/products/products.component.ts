import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/products.service';
import { Product } from '../../interface/product';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductService){

  }
  ngOnInit(){
    this.productService.getProducts()
                       .subscribe(products => {
                         this.products = products
                       })
  }
}
