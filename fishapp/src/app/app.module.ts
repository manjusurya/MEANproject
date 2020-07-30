import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellersListComponent } from './sellers-list/sellers-list.component';
import { HomeComponent } from './home/home.component';
import { NewSellerComponent } from './new-seller/new-seller.component';

import { EditSellerComponent } from './edit-seller/edit-seller.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Login1Component } from './login1/login1.component';
import { BuyerpageComponent } from './buyerpage/buyerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellersListComponent,
    HomeComponent,
    NewSellerComponent,
    EditSellerComponent,
    SignupComponent,
    LoginComponent,
    Signup1Component,
    Login1Component,
    BuyerpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
