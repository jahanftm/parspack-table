import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import {NzTableModule} from "ng-zorro-antd/table";
import {MapModalComponent} from "./map-modal/map-modal.component";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [MapModalComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    MatDialogModule,
  ],
  entryComponents: [
    // MapModalComponent
  ]
})
export class TableModule { }
