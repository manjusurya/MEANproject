import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import {SignupModel} from './signup.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String="Seller signup"

  constructor(private sellerService:SellerService,private router:Router) { }
  signupItem = new SignupModel(null,null,null);
  

  ngOnInit(): void {
  }
  AddProfile(){
    this.sellerService.newSignup(this.signupItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/login']);

  }

}
