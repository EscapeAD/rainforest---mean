import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


import { ProductService } from '../../services/products.service';
import { Product } from '../../interface/product';


@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'product.component.html',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
product: Product
  constructor(private router: Router, private productService: ProductService,private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params
       .switchMap((params) => this.productService.getProduct(params['id']))
       .subscribe((product) => {
         console.log(product);
         this.product = product
       }
     );
  }

  goHome(){
    this.router.navigate(['/products']);
  }
  goDelete(id){
    this.productService.goDelete(id)
                       .subscribe( data => {
                         this.router.navigate(['/products']);
                       })
  }
}
