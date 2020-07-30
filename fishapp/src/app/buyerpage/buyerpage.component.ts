import { Component, OnInit } from '@angular/core';
import {SellerService} from '../seller.service'
import {SellerModel} from '../sellers-list/seller.model'

@Component({
  selector: 'app-buyerpage',
  templateUrl: './buyerpage.component.html',
  styleUrls: ['./buyerpage.component.css']
})
export class BuyerpageComponent implements OnInit {
  title:String ="Seller List";
  sellers: SellerModel[];

  constructor(private sellerService:SellerService) { }

  ngOnInit(): void {
    this.sellerService.getSellers().subscribe((data)=>{
      this.sellers=JSON.parse(JSON.stringify(data));
    })
  }

}
