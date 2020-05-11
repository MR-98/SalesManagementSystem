import {Category} from "../categories/category";

export class Product {
  id: number;
  name: string;
  basePrice: number;
  preferredSalePrice: number;
  category: Category;
}
