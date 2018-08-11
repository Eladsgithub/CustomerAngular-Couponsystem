import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/Coupon'
import { Http } from '@angular/http';



@Component({
  selector: 'app-get-all-purchased-coupons-by-price',
  templateUrl: './get-all-purchased-coupons-by-price.component.html',
  styleUrls: ['./get-all-purchased-coupons-by-price.component.css']
})
export class GetAllPurchasedCouponsByPriceComponent implements OnInit {
  couponsbytype = [];
  public price;

  constructor(private _http : Http) { }

  ngOnInit() {
  }
  public getAllPurchasedCouponsByPrice()
  {
    this._http.get(`http://localhost:8080/CustomerWS/getAllPurchasedCouponsByPrice/${this.price}`).map(res=>{
      return res.json();
    }).subscribe(res=>{
      this.couponsbytype = res;
    },err=>{
      console.log(err);
    });
  }
}
