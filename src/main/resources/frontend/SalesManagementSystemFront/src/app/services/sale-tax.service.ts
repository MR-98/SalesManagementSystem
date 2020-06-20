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

  url: string = 'https://sms-zpi-2020.ew.r.appspot.com/calculator';

  constructor(private http: HttpClient) {
  }

  getTaxByStateAndCategoryName(state: string, categoryName: string, productBasePrice: number): Observable<number> {
    return this.http.get<number>(this.url+"/"+state+"/"+categoryName+"?productPrice="+productBasePrice);
  }
}
