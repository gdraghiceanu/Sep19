import { Product } from './product';

export interface NoteBook extends Product {
  description: string;
  pages: number;
  size: string;
}
