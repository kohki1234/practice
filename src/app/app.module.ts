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

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MobileSubComponent,
    MainpageComponent,
    MobileSub2Component,
    InternetComponent,
    InternetSubComponent
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
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
