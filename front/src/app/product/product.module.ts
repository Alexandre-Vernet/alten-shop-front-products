import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChipsModule } from "primeng/chips";
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { AutoCompleteModule } from "primeng/autocomplete";

@NgModule({
  declarations: [ProductsComponent, ProductsAdminComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    DropdownModule,
    FormsModule,
    ChipsModule,
    TableModule,
    DialogModule,
    AutoCompleteModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
