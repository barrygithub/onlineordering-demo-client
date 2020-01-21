import {Component, Input, OnInit} from '@angular/core';

import { MenuCartModel } from '../../menu-cart.model';

import {MenuCartService} from '../../menu-cart.service';

@Component({
  selector: 'app-menu-cart-item',
  templateUrl: './menu-cart-item.component.html',
  styleUrls: ['./menu-cart-item.component.css']
})
export class MenuCartItemComponent implements OnInit {
  @Input() cartItem: MenuCartModel;

  quantityNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity = 1;

  constructor(private menuCartService: MenuCartService) {

  }


  ngOnInit() {
    this.selectedQuantity = this.cartItem.numOrder;
    this.menuCartService.calcSubtotal.emit(); // Load Subtotal Amount
  }

  onRemove() {
   this.menuCartService.removeItemSelected.emit(this.cartItem);
  }

  updateQuantity(event) {
    this.cartItem.numOrder = event;
    this.cartItem.totalPrice = this.menuCartService.calculateTotal(this.cartItem.price, this.cartItem.optionsPrice, event);
    this.menuCartService.updateItemSelected.emit(this.cartItem);
  }
}
