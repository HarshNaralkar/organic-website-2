export interface Category {
  id: string;
  name: string;
  hindiName?: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  description: string;
  priceEstimate?: string;
  image: string;
  tag?: string;
  features: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  productMentioned?: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "store" | "products" | "lifestyle" | "packaging" | "farm" | "ingredients";
  image: string;
  aspectRatio: "portrait" | "landscape" | "square";
}
