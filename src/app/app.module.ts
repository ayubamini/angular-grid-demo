import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { RTL } from '@progress/kendo-angular-l10n';


import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgxDataTableComponent } from './ngx-datatable/ngx-datatable.component';
import { AngularDataTableComponent } from './angular-datatable/angular-datatable.component';
import { KendouiComponent } from './kendoui-datatable/kendoui.component';
import { HomeComponent } from './home/home.component';
import { PaperDatatableComponent } from './paper-datatable/paper-datatable.component';
import { VaadinGridComponent } from './vaadin-grid/vaadin-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    NgxDataTableComponent,
    AngularDataTableComponent,
    KendouiComponent,
    HomeComponent,
    PaperDatatableComponent,
    VaadinGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    ButtonsModule,
    GridModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'smarttable', component: SmartTableComponent },
      { path: 'ngx-dt', component: NgxDataTableComponent },
      { path: 'angular-dt', component: AngularDataTableComponent },
      { path: 'kendoui-dt', component: KendouiComponent },
      { path: 'paper-dt', component: PaperDatatableComponent },
      { path: 'vaadin-grid', component: VaadinGridComponent },
    ]),
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
