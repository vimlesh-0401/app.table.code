import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  list(options: any) {
    return this.http.get(`http://localhost:3301/tables?${options.sort}`, {});
  }
}
