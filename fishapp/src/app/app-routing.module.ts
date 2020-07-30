import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersListComponent } from './sellers-list/sellers-list.component';
import { HomeComponent } from './home/home.component';
import { NewSellerComponent } from './new-seller/new-seller.component';
import { EditSellerComponent } from './edit-seller/edit-seller.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Login1Component } from './login1/login1.component';
import { BuyerpageComponent } from './buyerpage/buyerpage.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'sellers',component:SellersListComponent},
{path:'add',component:NewSellerComponent},
{path:'edit/:id',component:EditSellerComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'signup1',component:Signup1Component},
{path:'login1',component:Login1Component},
{path:'buyer',component:BuyerpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
