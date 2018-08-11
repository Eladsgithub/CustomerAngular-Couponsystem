import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon'
import { Http } from '@angular/http';


@Component({
  selector: 'app-get-all-purchased-coupons-by-type',
  templateUrl: './get-all-purchased-coupons-by-type.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-type.component.css']
})  
export class GetAllPurchasedCouponsByTypeComponent implements OnInit {
  couponsbytype = [];
  constructor(private _http : Http) { }
  options = ["FOOD", "LEISURE", "ELECTRICAPPLIANCES", "VACATION"]

  ngOnInit() {
  }

  onChange(option) {
    this._http.get(`http://localhost:8080/CustomerWS/getAllPurchasedCouponsByType/${option}`).map(res=>{
      return res.json();
    }).subscribe(res=>{
      this.couponsbytype = res;
    },err=>{
      console.log(err);
    });
     
}
}
