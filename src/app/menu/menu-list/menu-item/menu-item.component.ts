import { Component, OnInit, Input } from '@angular/core';

import { MenuModel } from '../../menu.model'; // use for displaying data
import { MenuService} from '../../menu.service';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MenuModalComponent} from './menu-modal/menu-modal.component';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuModel; // Type of MenuModel, @Input allows parents to pass data down via instance variable "item"

  constructor(private menuService: MenuService,
              private modalService: NgbModal) { }

  onSelected() {
    const modalRef = this.modalService.open(MenuModalComponent, {centered: true} ); // Launch Modal
    modalRef.componentInstance.item = this.item; // Pass this "item" received from parent (menu list) over to modal
  }

  ngOnInit() {
  }

  // onSelected() {
  //   this.menuService.dishSelected.emit(this.item);
  // }


}
