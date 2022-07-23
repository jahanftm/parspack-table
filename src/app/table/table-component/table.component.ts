import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {TableService} from "../../core/api/table.service";
import {Address, UserInfo} from "../../core/models/table.response";
import {MatDialog} from "@angular/material/dialog";
import {MapModalComponent} from "../map-modal/map-modal.component";
import {ListModel} from "../../core/models/list.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSet: UserInfo[] | [] = [];

  nameList: ListModel[] = [];

  emailList: ListModel[] = [];

  zipcodeList: ListModel[] = [];

  phoneList: ListModel[] = [];

  spinner = false;

  pageIndex = 1;

  pageSize = 5;

  constructor(
    private tableService: TableService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.spinner = true;
    this.tableService.getTableInfo().subscribe(data => {
        this.dataSet = data;
        this.spinner = false;
        this.dataSet.forEach(x => {
          this.nameList.push({text: x.name, value: x.name, checked: false});
          this.emailList.push({text: x.email, value: x.email, checked: false});
          this.zipcodeList.push({text: x.address.zipcode, value: x.address.zipcode, checked: false});
          this.phoneList.push({text: x.phone, value: x.phone, checked: false});
        });
      },
      error => {
        this.spinner = false;
      })
  }


  openDialog(evt: Address): void {
    const dialogRef = this.dialog.open(MapModalComponent, {
      width: '450px',
      data: evt,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  sortNames = (a: UserInfo, b: UserInfo) => a.name.localeCompare(b.name);
  sortZipcode = (a: UserInfo, b: UserInfo) => a.address.zipcode.localeCompare(b.address.zipcode);
  sortEmail = (a: UserInfo, b: UserInfo) => a.email.localeCompare(b.email);
  sortPhone = (a: UserInfo, b: UserInfo) => a.phone.localeCompare(b.phone);

  filterName = (list: string[], item: UserInfo) => list.some(name => item.name.indexOf(name) !== -1);
  filterEmail = (list: string[], item: UserInfo) => list.some(email => item.email.indexOf(email) !== -1);
  filterZipcode = (list: number[], item: UserInfo) => list.some(zipcode => item.address.zipcode.indexOf(String(zipcode)) !== -1);
  filterPhone = (list: string[], item: UserInfo) => list.some(phone => item.phone.indexOf(phone) !== -1);

}
