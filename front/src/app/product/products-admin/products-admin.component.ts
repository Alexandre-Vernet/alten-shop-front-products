import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { FormControl, FormGroup, Validators } from "@angular/forms";

export enum Mode {
  create = 'create',
  update = 'update',
}

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  products: Product[] = [];
  displayModal: boolean;
  mode: Mode = Mode.create;
  formProduct = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
    inventoryStatus: new FormControl('', [Validators.required]),
    rating: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(5)]),
  });

  constructor(
    private readonly productService: ProductService,
  ) { }

  private getFormProduct(): Product {
    return {
      id: Number(this.formProduct.get('id').value),
      code: this.formProduct.get('code').value,
      name: this.formProduct.get('name').value,
      description: this.formProduct.get('description').value,
      image: this.formProduct.get('image').value,
      price: this.formProduct.get('price').value,
      category: this.formProduct.get('category').value,
      quantity: this.formProduct.get('quantity').value,
      inventoryStatus: this.formProduct.get('inventoryStatus').value,
      rating: this.formProduct.get('rating').value,
    };
  }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.products = products;
    });
  }

  showModalCreateProduct() {
    this.displayModal = true;
    this.mode = Mode.create;
    this.formProduct.reset();
  }

  createProduct() {
    this.productService.createProduct(this.getFormProduct());
    this.displayModal = false;
  }

  openModalUpdateProduct(product: Product) {
    this.mode = Mode.update;
    this.formProduct.setValue({
      id: product.id.toString(),
      code: product.code,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
      inventoryStatus: product.inventoryStatus,
      rating: product.rating,
    });
    this.displayModal = true;
  }

  updateProduct() {
    this.productService.updateProduct(this.getFormProduct());
    this.displayModal = false;
    this.mode =Mode.create;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
