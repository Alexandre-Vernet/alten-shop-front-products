import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { ChipsModule } from "primeng/chips";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    DropdownModule,
    FormsModule,
    ChipsModule
  ]
})
export class ProductModule { }
