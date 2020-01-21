import { Component, OnInit, Input, ViewChild } from '@angular/core';


import { NgForm } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../../../menu.service';
import {MenuModel} from '../../../menu.model';
import { MenuCartService} from '../../../menu-cart/menu-cart.service';
import {MenuCartModel} from '../../../menu-cart/menu-cart.model';


@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {
  @Input() item: MenuModel; // Type of MenuModel, @Input allows parents to pass data down via instance variable "item"
  // @Input() dish: MenuCartModel;
  // @ViewChild("f") dishForm: NgForm;

  dishMultiplier = this.menuCartService.dishMultiplier;
  singleDishPrice = 0;
  totalDishPrice = 0;
  totalOptionPrice = this.menuCartService.totalDishPrice;
  options: string[] = [];


  constructor(public activeModal: NgbActiveModal,
              private menuService: MenuService,
              private menuCartService: MenuCartService) {

  }

  ngOnInit() {
    this.totalDishPrice = this.item.price;
    this.singleDishPrice = this.item.price;

  }

  addOne() {
    if (this.dishMultiplier < 10) {
      this.menuCartService.addOne(this.singleDishPrice);
      this.dishMultiplier = this.menuCartService.dishMultiplier;
      this.totalDishPrice = this.menuCartService.totalDishPrice;
      this.totalOptionPrice = this.menuCartService.totalOptionPrice;
    }
  }

  subtractOne() {
    if (this.dishMultiplier > 1) {
    this.menuCartService.subtractOne(this.singleDishPrice);
    this.dishMultiplier = this.menuCartService.dishMultiplier;
    this.totalDishPrice = this.menuCartService.totalDishPrice;
    this.totalOptionPrice = this.menuCartService.totalOptionPrice;
    }
  }

  onSelectOption(optionName, optionPrice, event) {
    this.menuCartService.onSelectOption(this.singleDishPrice, this.options, optionName, optionPrice, event);
    this.totalDishPrice = this.menuCartService.totalDishPrice;
    this.totalOptionPrice = this.menuCartService.totalOptionPrice;
    console.log(this.options);
  }

  addToCart() {
    const dishName = this.item.name;
    const dishPrice = this.item.price;
    const dishOptions = this.options;
    const optionsPrice = this.totalOptionPrice;
    const numOrder = this.dishMultiplier;
    const dishTotalPrice = this.totalDishPrice;
    const selectedDish = new MenuCartModel(dishName, dishPrice, dishOptions, optionsPrice, numOrder, dishTotalPrice);
    this.menuCartService.addItemSelected.emit(selectedDish);
    this.closeModal();
  }

  closeModal() {
    this.options = [];
    this.menuCartService.resetValues();
    this.activeModal.close();
  }
}
