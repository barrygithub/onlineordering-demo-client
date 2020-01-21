import { Component, OnInit } from '@angular/core';

import {MenuCartModel} from '../menu-cart.model';
import {MenuCartService} from '../menu-cart.service';

@Component({
  selector: 'app-menu-cart-list',
  templateUrl: './menu-cart-list.component.html',
  styleUrls: ['./menu-cart-list.component.css']
})
export class MenuCartListComponent implements OnInit {

  // selectedItems: MenuCartModel[];
  selectedItems = this.menuCartService.getCart();

  public subscriberAdd: any = {};
  public subscriberRemove: any = {};
  public subscriberUpdate: any = {};

  constructor(private menuCartService: MenuCartService) { }

  ngOnInit() {
    // this.selectedItems = this.menuCartService.getCart();

    this.subscriberAdd = this.menuCartService.addItemSelected
      .subscribe(
        (newItem: MenuCartModel) => {
          console.log(newItem)
          this.menuCartService.updateCart(newItem); // Push new item on to itemsInCart array in menu card services.
          this.selectedItems = this.menuCartService.getCart(); // retrieve updated carts and display
          this.menuCartService.calcSubtotal.emit();

        }
      );

    this.subscriberRemove = this.menuCartService.removeItemSelected
      .subscribe(
        (exisitingItem: MenuCartModel) => {
          this.menuCartService.removeFromCart(exisitingItem);
          this.selectedItems = this.menuCartService.getCart();
          this.menuCartService.calcSubtotal.emit();
          event.preventDefault();

        }
      );

    this.subscriberUpdate = this.menuCartService.updateItemSelected
      .subscribe(
        (updatedItem: MenuCartModel) => {
          this.menuCartService.recalculateCart(updatedItem);
          this.menuCartService.calcSubtotal.emit();
        }
      );
  }

  ngOnDestroy() {
    this.subscriberAdd.unsubscribe();
    this.subscriberRemove.unsubscribe();
    this.subscriberUpdate.unsubscribe();
  }
}
