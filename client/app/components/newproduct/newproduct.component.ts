import { Component } from '@angular/core';

import { ProductService } from '../../services/products.service';
import { Product } from '../../interface/product';


@Component({
  moduleId: module.id,
  selector: 'newproduct',
  templateUrl: 'newproduct.component.html',
  providers: [ProductService]
})
export class NewProductComponent {

  constructor(private productService: ProductService){

  }
}
