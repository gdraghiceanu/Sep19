import { CurrencyEnum } from '../constants/currency.enum';

export interface Product {
  id: number;
  title: string;
  coverUrl?: string;
  price: number;
  currency: CurrencyEnum;
  review?: number;
}
