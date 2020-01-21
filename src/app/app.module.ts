import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCartComponent } from './menu/menu-cart/menu-cart.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuItemComponent} from './menu/menu-list/menu-item/menu-item.component';
import { RestaurantInfoComponent } from './menu/restaurant-info/restaurant-info.component';
import { MenuCartItemComponent } from './menu/menu-cart/menu-cart-list/menu-cart-item/menu-cart-item.component';
import { MenuModalComponent } from './menu/menu-list/menu-item/menu-modal/menu-modal.component';
import { MenuService } from './menu/menu.service';
import { MenuCartService } from './menu/menu-cart/menu-cart.service';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutCartComponent } from './checkout/checkout-cart/checkout-cart.component';
import { CheckoutStepsComponent } from './checkout/checkout-steps/checkout-steps.component';
import { MenuCartListComponent } from './menu/menu-cart/menu-cart-list/menu-cart-list.component';


const appRoutes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'checkout-cart', component: CheckoutCartComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuCartComponent,
    MenuListComponent,
    MenuItemComponent,
    RestaurantInfoComponent,
    MenuCartItemComponent,
    MenuModalComponent,
    CheckoutComponent,
    CheckoutCartComponent,
    CheckoutStepsComponent,
    MenuCartListComponent
  ],
  entryComponents: [MenuModalComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [MenuService, MenuCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
