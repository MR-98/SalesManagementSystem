import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from "../components/categories/category";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = 'https://sms-zpi-2020.ew.r.appspot.com/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  get(id: number): Observable<Category> {
    return this.http.get<Category>(this.url+"/"+id);
  }
}
