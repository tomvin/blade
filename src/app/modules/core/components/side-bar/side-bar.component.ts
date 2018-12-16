import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item/menu-item.service';
import { MenuItemCategoryVM } from '../../services/menu-item/menu-item.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuCategories: MenuItemCategoryVM[] = [];
  activeMenuItemCategoryId: number = 0;
  activeMenuItemChildId: number = 0;
  readonly MENU_ITEM_HEIGHT_PX: number = 47;  // Used to determine how high to expand the active menu category. Height of a single sub menu item. 

  constructor(
    private _menuItemService: MenuItemService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.menuCategories = this._menuItemService.getMenuItems();
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(r => this.updateActiveMenuItemCategoryId());
  }

  /**
   * Runs every time the route changes. 
   * 
   * Updates the active menu item category id and
   * active menu item child id. These allow the template to
   * display the currently selected menu item. 
   * 
   * It's done this way for optimal performance, so that the
   * logic to find the active menu id's is only performed once
   * per route navigation. 
   */
  private updateActiveMenuItemCategoryId(): void {
    this.menuCategories.forEach(category => {
      category.menuItems.forEach(menuItem => {
        if (menuItem.route === this._router.url) {
          this.activeMenuItemCategoryId = category.id;
          this.activeMenuItemChildId = menuItem.id;
          return;
        }
      });
    });
  }

}
