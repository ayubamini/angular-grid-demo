import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgxDataTableComponent } from './ngx-datatable/ngx-datatable.component';
import { AngularDataTableComponent } from './angular-datatable/angular-datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    NgxDataTableComponent,
    AngularDataTableComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    RouterModule.forRoot([{ path: 'smarttable', component: SmartTableComponent },
    { path: 'ngx-dt', component: NgxDataTableComponent },
    { path: 'angular-dt', component: AngularDataTableComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
