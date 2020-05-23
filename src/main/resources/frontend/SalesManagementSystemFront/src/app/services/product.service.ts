import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../components/products/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getAllInCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+"?categoryId="+categoryId);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<any>(this.url, product, httpOptions);
  }

  deleteProduct(product: Product) {
    // TODO: add delete option for product
  }

}
