import { Injectable } from '@angular/core';
import { MenuItemVM } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  /**
   * Returns an array of menu items.
   * 
   * TODO: Implement actual menu items for this application. 
   */
  getMenuItems(): MenuItemVM[] {
    return MOCKUP_MENU_ITEMS;
  }

}

const MOCKUP_MENU_ITEMS: MenuItemVM[] = [
  {
    label: 'Dashboards',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Components',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Form Controls',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Pages',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Maps',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Charts',
    fontAwesomeIconName: 'home',
    route: '/'
  },{
    label: 'Icons',
    fontAwesomeIconName: 'home',
    route: '/'
  }
];
