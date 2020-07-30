import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import {LoginModel} from './login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Seller login"

  constructor(private sellerService:SellerService,private router:Router) { }
  loginItem = new LoginModel(null,null);

  ngOnInit(): void {
  }
  FindProfile(){
    this.sellerService.newLogin(this.loginItem)
    .subscribe(
      res=>{
        console.log(res);
        if(res==='User Not Found'){alert('User Not Found')}else
        if(res==='Invalid Password'||res==='Invalid Email'){
          alert('Invalid Credentials');
        }else{
          alert('Logged In Successfully');
          this.router.navigate(['/sellers']);
        }
      },
      err=>{
        console.log(err);
      }
    )
    console.log(this.loginItem);
  }

}
