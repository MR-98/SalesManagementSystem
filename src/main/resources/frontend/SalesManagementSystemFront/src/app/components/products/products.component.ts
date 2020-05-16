import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'basePrice', 'preferredSalePrice', 'category', 'details'];
  products: Product[];
  dataSource;

  constructor(private productService: ProductService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = (item, property) => {
        if (property === 'category') {
          return item.category.name;
        } else {
          return item[property];
        }
      };
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirectToDetails(id: number) {
    //TODO: After clicking redirect to category page
  }

}
