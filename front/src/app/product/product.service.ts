import { Injectable } from '@angular/core';
import { Product } from "./product";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products: Observable<Product[]> = this.productsSubject$.asObservable();
  url = 'http://alten-shop-api:3000/api/products';

  constructor(
    private readonly http: HttpClient,
    private readonly messageService: MessageService
  ) {
    this.http.get(this.url)
      .subscribe((products: Product[]) => {
        this.productsSubject$.next(products);
      });
  }

  private showSuccess(message: string) {
    this.messageService.add({severity: 'success', summary: 'Success', detail: message});
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post(this.url, {product})
      .pipe(
        catchError(err => {
            return throwError(err);
          },
        ),
        tap((product: Product) => {
            const products = this.productsSubject$.getValue();
            this.productsSubject$.next([...products, product])
            this.showSuccess(`Product ${product.name} created`);
          }
        )
      );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(`${this.url}/${product.id}`, {product})
      .pipe(
        catchError(err => {
            return throwError(err);
          },
        ),
        tap((updateProduct: Product) => {
          const products = this.productsSubject$.getValue();
          const index = products.findIndex(p => p.id === product.id);
          if (index > -1) {
            products[index] = product;
          }
          this.productsSubject$.next(products);
          this.showSuccess(`Product ${product.name} updated`);
          return updateProduct;
        })
      )
  }

  deleteProduct(product: Product) {
    this.http.delete(`${this.url}/${product.id}`)
      .subscribe(() => {
        const products = this.productsSubject$.getValue();
        const index = products.findIndex(p => p.id === product.id);
        if (index > -1) {
          products.splice(index, 1);
        }
        this.productsSubject$.next(products);
        this.showSuccess(`Product ${product.name} deleted`);
      });
  }
}
