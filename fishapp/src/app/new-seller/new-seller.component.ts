import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import { SellerModel } from '../sellers-list/seller.model';

@Component({
  selector: 'app-new-seller',
  templateUrl: './new-seller.component.html',
  styleUrls: ['./new-seller.component.css']
})
export class NewSellerComponent implements OnInit {
  title:string ="Add Seller"

  constructor(private sellerService:SellerService,private router:Router) { }
  sellerItem = new SellerModel(null,null,null,null,null);

  ngOnInit(): void {
  }
  AddSeller(){
    this.sellerService.newSeller(this.sellerItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/sellers']);

  }

}
