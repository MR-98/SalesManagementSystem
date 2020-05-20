import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {TaxCalculatorComponent} from "./components/tax-calculator/tax-calculator.component";
import {CategoryDetailsComponent} from "./components/category-details/category-details.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'addproduct', component: ProductItemComponent},
  {path: 'taxCalculator', component: TaxCalculatorComponent},
  {path: 'categoryDetails/:categoryId', component: CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
