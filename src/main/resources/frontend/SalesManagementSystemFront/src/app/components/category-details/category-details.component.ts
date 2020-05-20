import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Category} from "../categories/category";
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";
import {Product} from "../products/product";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {SaleTaxService} from "../../services/sale-tax.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  categoryId: number;
  category: Category;

  tax: number;

  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'basePrice', 'preferredSalePrice', 'category'];
  dataSource;
  selectedValue: string = 'Alabama';

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService, private saleTaxService: SaleTaxService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = parseInt(params.get('categoryId'));
    });

    let temp: string = localStorage.getItem("selectedState");
    if (temp != undefined) {
      this.selectedValue = temp;
    }

    this.categoryService.get(this.categoryId).subscribe(category => {
      this.category = category;
      this.saleTaxService.getTaxByStateAndCategoryName(this.selectedValue, this.category.name).subscribe(tax => {
        this.tax = tax;
      });
    });

    this.productService.getAllInCategory(this.categoryId).subscribe(products =>{
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (item, property) => {
        if (property === 'category') {
          return item.category.name;
        } else {
          return item[property];
        }
      };
    });
  }
}
