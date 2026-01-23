export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  backgroundImage?: string;
}

export interface OperatingHours {
  day: string;
  time: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}