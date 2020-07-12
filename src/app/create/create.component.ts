import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  public table: any = {};
  constructor(
    private tableService: TableService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.tableService.findById(id).subscribe(table => {
          this.table = table;
        });
      }
    });
  }

  saveRecord() {
    this.tableService.create(this.table).subscribe(table => {
      this.goToRecords();
    }, (error) => {
      console.log(error);
    });
  }

  updateRecord() {
    this.tableService.update(this.table).subscribe(table => {
      this.goToRecords();
    });
  }

  goToRecords() {
    this.router.navigate(['/']);
  }

}
