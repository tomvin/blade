export interface MenuItemCategoryVM {
  id: number;
  categoryLabel: string;  // The category of the menu items inside this menu
  fontAwesomeIconName: string;  // The font awesome icon name to use for the menu item
  menuItems: MenuItemVM[]; // Child menu items (if there are any)
  defaultMenuItemIdToNavigateTo: number; // When the category is clicked, will navigate to the specified child id's route on click 
}

export interface MenuItemVM {
  id: number; 
  label: string;  // Menu text the user can see
  route: string;  // The route to navigate to
  fontAwesomeIconName: string;  // The font awesome icon name to use for the menu item
}