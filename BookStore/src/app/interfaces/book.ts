import { LanguageEnum } from 'src/app/constants/language.enum';
import { Product } from './product';

export interface Book extends Product {
  author: string;
  language: LanguageEnum;
  publisher: string;
  publicationDate: Date;
  review?: number;
}
