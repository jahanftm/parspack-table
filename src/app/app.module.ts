import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from './button/button.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent,
    MapModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    HttpClientModule,
    NzModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
