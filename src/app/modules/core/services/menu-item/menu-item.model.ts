export interface MenuItemVM {
  label: string;  // Menu text the user can see
  fontAwesomeIconName: string;  // The font awesome icon name to use for the menu item
  route: string;  // The route to navigate to
  subMenuItems?: SubMenuItemVM[]; // Child menu items (if there are any)
}

export interface SubMenuItemVM {
  label: string;  // Menu text the user can see
  route: string;  // The route to navigate to
}