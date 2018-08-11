import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PurchasecouponComponent } from './components/purchasecoupon/purchasecoupon.component';
import { GetAllPurchasedCouponsComponent } from './components/get-all-purchased-coupons/get-all-purchased-coupons.component';
import { GetAllPurchasedCouponsByTypeComponent } from './components/get-all-purchased-coupons-by-type/get-all-purchased-coupons-by-type.component';
import { GetAllPurchasedCouponsByPriceComponent } from './components/get-all-purchased-coupons-by-price/get-all-purchased-coupons-by-price.component';



@NgModule({
  declarations: [
    AppComponent,
    PurchasecouponComponent,
    GetAllPurchasedCouponsComponent,
    GetAllPurchasedCouponsByTypeComponent,
    GetAllPurchasedCouponsByPriceComponent,
    // CouponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'purchasecoupon',
        component: PurchasecouponComponent
      },
      {
        path:'getallpurchasedcoupons',
        component: GetAllPurchasedCouponsComponent
      },
      {
        path:'getallpurchasedcouponsbytype',
        component: GetAllPurchasedCouponsByTypeComponent
      },
      {
        path:'getallpurchasedcouponsbyprice',
        component: GetAllPurchasedCouponsByPriceComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
