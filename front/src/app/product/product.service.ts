import { Injectable } from '@angular/core';
import { Product } from "./product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products: Observable<Product[]> = this.productsSubject$.asObservable();
  url = 'http://localhost:3001/api/products';

  constructor(
    private readonly http: HttpClient
  ) {
    this.http.get(this.url)
      .subscribe((products: Product[]) => {
        this.productsSubject$.next(products);
      });
  }
}
