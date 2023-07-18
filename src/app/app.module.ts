import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
//import { HeaderComponent } from './layout/header/header.component';
import { LeftBarComponent } from './layout/left-bar/left-bar.component';
//import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
//import { ClientResolver } from './client/services/clients.resolver';




@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    //SidebarComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
