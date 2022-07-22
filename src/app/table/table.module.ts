import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import {NzTableModule} from "ng-zorro-antd/table";
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,

  ]
})
export class TableModule { }
