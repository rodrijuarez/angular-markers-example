import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get('http://escobargraciela.hol.es/public/producto');
  }
}
