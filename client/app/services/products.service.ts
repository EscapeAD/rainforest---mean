import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private http: Http){

    console.log('Product Service');

  }
  getProducts(){
    return this.http.get('/api/products')
                    .map(res => res.json())
  }
  addProduct(product: any){
    let header = new Headers()
    header.append('Content-Type', 'application/json');
    return this.http.post('/api/products', JSON.stringify(product), {headers: header})
                    .map(res => res.json())
  }
}
