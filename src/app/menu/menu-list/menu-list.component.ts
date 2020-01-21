import { Component, OnInit } from '@angular/core';

import {MenuModel} from '../menu.model';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  items: MenuModel[]; // Type of MenuModel Array

  constructor(private menuService: MenuService) {} // Inject the MenuService

  ngOnInit() {
    // this.items = this.menuService.getDishes();
    this.menuService
      .getDishes()
      .subscribe((response) => {
        console.log(response.message);
        this.items = response.data;
      });
  }

}
