import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { Login1Model} from './login1.model'

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  title:String="Buyer login"

  constructor(private sellerService:SellerService,private router:Router) { }
  login1Item = new Login1Model(null,null);

  ngOnInit(): void {
  }
  FindProfile1(){
    this.sellerService.newLogin1(this.login1Item)
    .subscribe(
      res=>{
        console.log(res);
        if(res==='User Not Found'){alert('User Not Found')}else
        if(res==='Invalid Password'||res==='Invalid Email'){
          alert('Invalid Credentials');
        }else{
          alert('Logged In Successfully');
          this.router.navigate(['/buyer']);
        }
      },
      err=>{
        console.log(err);
      }
    )
    console.log(this.login1Item);
  }

}



