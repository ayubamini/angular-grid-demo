import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { RTL } from '@progress/kendo-angular-l10n';


import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgxDataTableComponent } from './ngx-datatable/ngx-datatable.component';
import { AngularDataTableComponent } from './angular-datatable/angular-datatable.component';
import { KendouiComponent } from './kendoui-datatable/kendoui.component'


@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    NgxDataTableComponent,
    AngularDataTableComponent,
    KendouiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    
    Ng2SmartTableModule,
    NgxDatatableModule,
    ButtonsModule,
    GridModule,

    RouterModule.forRoot([
      { path: 'smarttable', component: SmartTableComponent },
      { path: 'ngx-dt', component: NgxDataTableComponent },
      { path: 'angular-dt', component: AngularDataTableComponent },
      { path: 'kendoui-dt', component: KendouiComponent }]),
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
