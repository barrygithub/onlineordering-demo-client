import {Component, OnInit} from '@angular/core';

import { MenuCartService } from './menu-cart.service';


@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.css']
})

export class MenuCartComponent implements OnInit {
  numOfItems = this.menuCartService.countCart();
  subtotalPrice = this.menuCartService.calcCart();

  public subscriberSubtotal: any = {};

  constructor(private menuCartService: MenuCartService) { }

  ngOnInit() {
    this.subscriberSubtotal = this.menuCartService.calcSubtotal
      .subscribe(
        () => {
          this.numOfItems = this.menuCartService.countCart();
          this.subtotalPrice = this.menuCartService.calcCart();
        }
      );
  }

  ngOnDestroy() {
    this.subscriberSubtotal.unsubscribe();
  }



}

