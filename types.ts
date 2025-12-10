export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface OperatingHours {
  day: string;
  time: string;
}