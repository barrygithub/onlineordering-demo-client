import {EventEmitter} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

import {MenuCartModel} from './menu-cart.model';

@Injectable()
export class MenuCartService {

  constructor(private http: HttpClient) {}


  itemsInCart: MenuCartModel[] = []; // Type of an Array of MenuModel

  addItemSelected = new EventEmitter<MenuCartModel>(); // Pass MenuModel as a Type

  removeItemSelected = new EventEmitter<MenuCartModel>();

  updateItemSelected = new EventEmitter<MenuCartModel>()

  calcSubtotal = new EventEmitter<MenuCartModel>();

  dishMultiplier = 1;
  singleDishPrice = 0;
  totalDishPrice = 0;
  totalOptionPrice = 0;


  resetValues() {
    this.dishMultiplier = 1;
    this.singleDishPrice = 0;
    this.totalDishPrice = 0;
    this.totalOptionPrice = 0;
  }

  addOne(single) {
    this.singleDishPrice = single;
    this.dishMultiplier++;
    this.calculateTotal(this.singleDishPrice, this.totalOptionPrice, this.dishMultiplier);
  }

  subtractOne(single) {
    this.singleDishPrice = single;
    this.dishMultiplier--;
    this.calculateTotal(this.singleDishPrice, this.totalOptionPrice, this.dishMultiplier);
  }

  onSelectOption(single, options, optionName, optionPrice, event) {
    this.singleDishPrice = single;
    if (event.target.checked === true) {
      this.totalOptionPrice = optionPrice + this.totalOptionPrice;
      options.push(optionName);
    } else {
      this.totalOptionPrice = this.totalOptionPrice - optionPrice;
      const index = options.indexOf(optionName);
      if (index > -1) {
        options.splice(index, 1);
      }
    }
    this.calculateTotal(this.singleDishPrice, this.totalOptionPrice, this.dishMultiplier);

  }

  calculateTotal(single, option, multiplier) {
    this.totalDishPrice = (single + option) * multiplier;
    return this.totalDishPrice;
  }


  recalculateCart(updatedItem) {
    const index = this.itemsInCart.indexOf(updatedItem);
    if (index > -1) {
      this.itemsInCart[index] = updatedItem;
    }
  }



  updateCart(item) {
    this.itemsInCart.push(item);
  }

  getCart() {
    return this.itemsInCart.slice();
  }

  removeFromCart(item) {
    const index = this.itemsInCart.indexOf(item);
    if (index > -1) {
      this.itemsInCart.splice(index, 1);
    }
  }

  removeAllCart() {
    return this.itemsInCart.splice(0, this.itemsInCart.length);
  }

  countCart() {
    let total = 0;
    this.itemsInCart.forEach(function(item) {
        total += item.numOrder;
      }
    );
    return total;
  }

  calcCart() {
    let subtotal = 0;
    this.itemsInCart.forEach(function(item) {
        subtotal += item.totalPrice;
      }
    );
    subtotal = parseFloat( subtotal.toFixed(2));
    return subtotal;
  }

  /** Calculate Tax **/
  calcTax(subtotal, tax) {
    let taxAmount = subtotal * tax;
    taxAmount = parseFloat( taxAmount.toFixed(2));
    return taxAmount;
  }

  calcFinalAmount(subtotal, tax) {
    let finalAmount = subtotal + tax;
    finalAmount = parseFloat( finalAmount.toFixed(2));
    return finalAmount;
  }

  sendOrder() {
    const data = {orderData: this.itemsInCart.slice()};
    /*
    const data = {orderData: [
    {name: 'Combo Platter', price: 10, options: ['mild', 'Spicy']},
    {name: 'Combo Platter1', price: 10, options: ['mild']}
    ]};
    */

    //const data = {name: 'big mac'};

    this.http.post<{message: string}>('http://localhost:3000/api/orders', data)
      .subscribe( (responseData) => {
        console.log(responseData.message);
      });
    console.log(typeof data.orderData[0].options);
    console.log(data);
    this.removeAllCart();
  }



}
