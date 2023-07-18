import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


console.warn("client module")


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    // HeaderComponent,
    // SideBarComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  exports:[
    // AddComponent,
    // ListComponent,
    // HeaderComponent

  ]
})
export class ClientModule { }
