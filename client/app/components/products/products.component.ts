import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/products.service';
import { Product } from '../../model/product';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[]
  resets: Product[]
  search: string


  constructor(private productService: ProductService,private router: Router){

  }
  ngOnInit(){
    this.productService.getProducts()
                       .subscribe(products => {
                         this.products = products
                         this.resets = products
                         console.log(products)
                       })
  }
  goProduct(id:any){
    this.router.navigate(['/products', id]);
  }

  filterSearch(searchQ:any){
    let search = this.search
    if(search.trim() != '' && search ){
    this.products = this.products.filter((product)=>{
        return (product['name'].toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    } else {
      this.products = this.resets
    }
  }
  resetSearch(){
    this.products = this.resets
  }
}
