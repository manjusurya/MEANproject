import { Component, OnInit } from '@angular/core';
import {SellerModel}from './seller.model';
import{SellerService}from '../seller.service';




@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.css']
})
export class SellersListComponent implements OnInit {
  title:String ="Seller List";
  sellers: SellerModel[];

  constructor(private sellerService:SellerService) { }
  

  ngOnInit(): void {
    this.sellerService.getSellers().subscribe((data)=>{
      this.sellers=JSON.parse(JSON.stringify(data));
    })
    }
    deleteSeller(id){
      this.sellerService.deleteSeller(id);
      alert( "deleted one doc");
      
      this.ngOnInit();
    }
  
  }
