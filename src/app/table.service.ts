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

  create(table) {
    return this.http.post('http://localhost:3301/tables', { table });
  }

  findById(id: string) {
    return this.http.get(`http://localhost:3301/tables/${id}`);
  }
  update(table) {
    return this.http.put(`http://localhost:3301/tables/${table._id}`, { table });
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3301/tables/${id}`);
  }
}
