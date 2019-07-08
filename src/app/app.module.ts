import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileSubComponent } from './mobile-sub/mobile-sub.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MobileSub2Component } from './mobile-sub2/mobile-sub2.component';
import { InternetComponent } from './internet/internet.component';
import { InternetSubComponent } from './internet-sub/internet-sub.component';
import { InternetHikariComponent } from './internet-hikari/internet-hikari.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingSubComponent } from './shopping-sub/shopping-sub.component';
import { ShoppingAmazonComponent } from './shopping-amazon/shopping-amazon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricitySubComponent } from './electricity-sub/electricity-sub.component';
import { ElectricityChargeComponent } from './electricity-charge/electricity-charge.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MobileSubComponent,
    MainpageComponent,
    MobileSub2Component,
    InternetComponent,
    InternetSubComponent,
    InternetHikariComponent,
    ShoppingComponent,
    ShoppingSubComponent,
    ShoppingAmazonComponent,
    NotFoundComponent,
    ElectricityComponent,
    ElectricitySubComponent,
    ElectricityChargeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainpageComponent
       },
       {
        path: 'mobile',
        component: MobileComponent
       },
       {
        path: 'mobile/sub',
        component: MobileSubComponent
       },
       {
        path: 'mobile/sub/charge',
        component: MobileSub2Component
       },
       {
        path: 'internet',
        component: InternetComponent
       },
       {
        path: 'internet/sub',
        component: InternetSubComponent
       },
       {
        path: 'internet/sub/hikari',
        component: InternetHikariComponent
       },
       {
        path: 'shopping',
        component: ShoppingComponent
       },
       {
        path: 'shopping/sub',
        component: ShoppingSubComponent
       },
       {
        path: 'shopping/sub/amazon',
        component: ShoppingAmazonComponent
       },
       {
        path: 'electricity',
        component: ElectricityComponent
       },
       {
        path: 'electricity/sub',
        component: ElectricitySubComponent
       },
       {
        path: 'electricity/sub/charge',
        component: ElectricityChargeComponent
       },
       {
        path: '**',
        component: NotFoundComponent
       },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
