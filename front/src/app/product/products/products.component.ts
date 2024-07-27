import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  search: string;
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: string;

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.products = products;
    });

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
  }

}
