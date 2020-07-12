import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public entries: any;
  public sort = {};
  public startDate: string;
  public endDate: string;
  private sortColumn = 'city';
  private sortOrder = 'asc';
  constructor(private tableService: TableService) { }
  ngOnInit() {
    this.fetchEntries();
  }
  fetchEntries() {
    let query = '';
    if (this.sortColumn) {
      query += `sort[${this.sortColumn}]=${this.sortOrder}`;
    }
    if (this.startDate) {
      query += `&search[start_date][gte]=${this.startDate}`;
    }
    if (this.startDate) {
      query += `&search[start_date][lte]=${this.endDate}`;
    }
    this.tableService.list({ sort: query }).subscribe(tables => {
      this.entries = tables;
    }, (error) => {
      console.log(error);
    });
  }

  filter() {
    this.fetchEntries();
  }
  sortBy(column: string) {
    if (this.sortColumn !== column) {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    } else {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }
    this.fetchEntries();
  }

  delete(id: string) {
    this.tableService.delete(id).subscribe(re => {
      this.fetchEntries();
    }, (error) => {
      console.log(error);
    });
  }
}
