import {Component, OnInit} from '@angular/core';
import {TableService} from "../core/api/table.service";
import {UserInfo} from "../core/models/table.response";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSet: UserInfo[] | [] = [];

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableService.getTableInfo().subscribe(data => {
      console.log(data)
      this.dataSet = data;
    })
  }

  showMap(evt: any) {
    console.log(evt)
  }
}
