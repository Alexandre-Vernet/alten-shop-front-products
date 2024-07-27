import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-1',
    labels: {
      en: 'Products',
      fr: 'Produits'
    },
    link: '/products',
    icon: 'pi pi-shopping-cart'
  },
  {
    id: 'Menu-item-2',
    labels: {
      en: 'Admin',
      fr: 'Admin'
    },
    link: '/admin/products',
    icon: 'pi pi-user'
  }
];
