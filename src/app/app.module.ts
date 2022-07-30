import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableComponent} from './table/table-component/table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from './table/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from "./table/table.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
