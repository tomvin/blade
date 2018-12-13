import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item/menu-item.service';
import { MenuItemCategoryVM, MenuItemVM } from '../../services/menu-item/menu-item.model';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
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
    const menuItemWithActiveRoute: MenuItemCategoryVM[] = this.menuCategories.filter(category => 
      category.menuItems.find(menuItem => {
        if (menuItem.route == this._router.url) {
          this.activeMenuItemChildId = menuItem.id;
          return true;
        }
      })
    );

    if (menuItemWithActiveRoute.length > 0) {
      this.activeMenuItemCategoryId = menuItemWithActiveRoute[0].id;
    }
  }

}
