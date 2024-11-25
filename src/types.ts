export interface Category {
  id: number;
  name: string;
  img: string;
}
export interface Item {
  id: number;
  name: string;
  img: string;
  categoryId: number;
  categoryName: string;
  unique: string;
  price: number;
  description: string;
  overview: string[];
  relatedImgs?: string[];
}
export interface Data {
  items: Item[];
  categories: Category[];
}
export interface Kind {
  id: number;
  name: string;
  img: string;
  quantity: number;
}
