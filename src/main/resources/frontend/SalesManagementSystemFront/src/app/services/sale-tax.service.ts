import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SaleTaxService {

  url: string = 'http://localhost:8080/calculator';

  constructor(private http: HttpClient) {
  }

  getTaxByStateAndCategoryName(state: string, categoryName: string): Observable<number> {
    return this.http.get<number>(this.url+"/"+state+"/"+categoryName);
  }
}
