import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//auth0 in angular
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/.env/environment';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DatatblComponent } from './datatbl/datatbl.component';
//pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadimgComponent } from './uploadimg/uploadimg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatatblComponent,
    UploadimgComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({...environment.auth0,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    NgxPaginationModule,
    FormsModule,
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
