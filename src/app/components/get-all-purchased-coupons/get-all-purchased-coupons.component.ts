import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-get-all-purchased-coupons',
  templateUrl: './get-all-purchased-coupons.component.html',
  styleUrls: ['./get-all-purchased-coupons.component.css']
})
export class GetAllPurchasedCouponsComponent implements OnInit {

  public _purchasedcoupons : Coupon[] = []; 

  constructor(private _http : Http) { }

  ngOnInit() {

    this._http.get('http://localhost:8080/CustomerWS/getAllPurchasedCoupons').map(res=>{
      return res.json();
    }).subscribe(res=>{
      this._purchasedcoupons = res;
    },err=>{
      console.log(err);
    });
  }

}
