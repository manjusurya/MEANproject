import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import {SellerModel} from'../sellers-list/seller.model'
import { Router } from '@angular/router';

import {ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.css']
})
export class EditSellerComponent implements OnInit {
  title:String="Edit seller"

  constructor(private sellerService:SellerService,private router:Router,
    private activatedRoute:ActivatedRoute) { }
    sellerItem = new SellerModel(null,null,null,null,null);
    sub;



  ngOnInit(): void {
    this.sub=this.activatedRoute.params.subscribe((params:Params):void=>{
      const id=params['id'];
      this.sellerService.getSeller(id).subscribe((seller)=>
      {
        let data=JSON.parse(JSON.stringify(seller))
        this.sellerItem=data[0]
        console.log(this.sellerItem)

      })
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  EditSeller(){
    console.log();
    this.sellerService.EditSeller(this.sellerItem);
    this.router.navigate(['/sellers']);
  }


}
