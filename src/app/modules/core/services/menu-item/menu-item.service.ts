import { Injectable } from '@angular/core';
import { MenuItemVM, MenuItemCategoryVM } from './menu-item.model';

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
  getMenuItems(): MenuItemCategoryVM[] {
    return MOCKUP_MENU_ITEMS;
  }

}

const MOCKUP_MENU_ITEMS: MenuItemCategoryVM[] = [
  {
    id: 1,
    categoryLabel: 'Dashboards',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 2,
    menuItems: [
      {
        id: 2,
        label: 'Layout One',
        route: '/dashboard/one',
        fontAwesomeIconName: 'home'
      },
      {
        id: 15,
        label: 'Layout Two',
        route: '/dashboard/two',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 3,
    categoryLabel: 'Components',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 4,
    menuItems: [
      {
        id: 4,
        label: 'Button',
        route: '/component/button',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 5,
    categoryLabel: 'Form Controls',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 6,
    menuItems: [
      {
        id: 6,
        label: 'Layout One',
        route: '/form-controls',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 7,
    categoryLabel: 'Pages',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 8,
    menuItems: [
      {
        id: 8,
        label: 'Layout One',
        route: '/pages',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 9,
    categoryLabel: 'Maps',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 10,
    menuItems: [
      {
        id: 10,
        label: 'Layout One',
        route: '/maps',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 11,
    categoryLabel: 'Charts',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 12,
    menuItems: [
      {
        id: 12,
        label: 'Layout One',
        route: '/charts',
        fontAwesomeIconName: 'home'
      }
    ]
  },{
    id: 13,
    categoryLabel: 'Icons',
    fontAwesomeIconName: 'home',
    defaultMenuItemIdToNavigateTo: 14,
    menuItems: [
      {
        id: 14,
        label: 'Layout One',
        route: '/icons',
        fontAwesomeIconName: 'home'
      }
    ]
  }
];
