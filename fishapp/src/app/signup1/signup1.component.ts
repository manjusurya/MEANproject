import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { Signup1Model} from './signup1.model'

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  title:String="Buyer signup"

  constructor(private sellerService:SellerService,private router:Router) { }
  signup1Item = new Signup1Model(null,null,null);

  ngOnInit(): void {
  }
  AddProfile1(){
    this.sellerService.newSignup1(this.signup1Item);
    console.log("called");
    alert("success");
    this.router.navigate(['/login1']);

  }


}
