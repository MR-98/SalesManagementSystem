import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'basePrice', 'preferredSalePrice', 'category', 'deleteButtons'];
  products: Product[];
  dataSource;

  constructor(private productService: ProductService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
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
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe();
    this.products = this.products.filter((value,key)=>{ return value.id != product.id; });
    this.dataSource = new MatTableDataSource(this.products);
  }

}
