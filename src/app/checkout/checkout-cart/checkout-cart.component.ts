import { Component, OnInit } from '@angular/core';
import { MenuCartService} from '../../menu/menu-cart/menu-cart.service';


@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  subtotalPrice = this.menuCartService.calcCart();
  tax = 0;
  finalTotalPrice = 0;

  public subscriberSubtotal: any = {};

  constructor(private menuCartService: MenuCartService) {
  }

  ngOnInit() {
    this.subscriberSubtotal = this.menuCartService.calcSubtotal
      .subscribe(
        () => {
          this.subtotalPrice = this.menuCartService.calcCart();
          this.tax = this.menuCartService.calcTax(this.subtotalPrice, 0.0825);
          this.finalTotalPrice = this.menuCartService.calcFinalAmount(this.subtotalPrice, this.tax);
        }
      );
  }

  ngOnDestroy() {
    this.subscriberSubtotal.unsubscribe();
  }

  placeOrder() {
    this.menuCartService.sendOrder();
  }
}
