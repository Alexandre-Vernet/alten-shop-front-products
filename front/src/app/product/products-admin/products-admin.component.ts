import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.products = products;
    });
  }

}
