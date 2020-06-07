import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryItemComponent} from './components/category-item/category-item.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ProductsComponent} from './components/products/products.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {SelectStateComponent} from './components/select-state/select-state.component';
import {MatSelectModule} from "@angular/material/select";
import {TaxCalculatorComponent} from './components/tax-calculator/tax-calculator.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CategoryDetailsComponent} from './components/category-details/category-details.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {DatabaseCapacityComponent} from './components/database-capacity/database-capacity.component';
import { ProductsNumberComponent } from './components/products-number/products-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryItemComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    SelectStateComponent,
    TaxCalculatorComponent,
    CategoryDetailsComponent,
    DatabaseCapacityComponent,
    ProductsNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
