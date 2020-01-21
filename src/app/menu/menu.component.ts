import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service';
import {MenuCartService} from './menu-cart/menu-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
