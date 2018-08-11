import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Coupon } from '../../common/Coupon';

@Component({
  selector: 'app-purchasecoupon',
  templateUrl: './purchasecoupon.component.html',
  styleUrls: ['./purchasecoupon.component.css']
})
export class PurchasecouponComponent implements OnInit {

  // public _coupon : Coupon = new Coupon();
  public coupontopurchase : String;
  constructor(private _http : Http) { }

  ngOnInit() {
  
  }
    public purchaseCoupon()
    {
      this._http.get('http://localhost:8080/CustomerWS/purchaseCoupon/' + this.coupontopurchase)
      .subscribe(function(Response)
        {
          console.log(Response);
          
        // }
        // ,function(Response)
        //   {
            // console.log(err);
          
          })
    }


  }


