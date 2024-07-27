import { Injectable } from '@angular/core';
import { Product } from "./product";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  products: Observable<Product[]> = this.productsSubject$.asObservable();
  url = 'http://localhost:3001/api/products';

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
    this.messageService.add({severity:'success', summary: 'Success', detail: message});
  }

  createProduct(product: Product) {
    this.http.post(this.url, {product})
      .subscribe((product: Product) => {
        const products = this.productsSubject$.getValue();
        this.productsSubject$.next([...products, product])
        this.showSuccess(`Product ${product.name} created`);
      });
  }

  updateProduct(product: Product) {
    this.http.put(`${this.url}/${product.id}`, {product})
      .subscribe(() => {
        const products = this.productsSubject$.getValue();
        const index = products.findIndex(p => p.id === product.id);
        if (index > -1) {
          products[index] = product;
        }
        this.productsSubject$.next(products);
        this.showSuccess(`Product ${product.name} updated`);
      });
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
