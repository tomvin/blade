import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuItemService } from '../../services/menu-item/menu-item.service';
import { MenuItemVM } from '../../services/menu-item/menu-item.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuItems: MenuItemVM[] = [];

  constructor(
    private _menuItemService: MenuItemService
  ) { }

  ngOnInit() {
    this.menuItems = this._menuItemService.getMenuItems();
  }

}
