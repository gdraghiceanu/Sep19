import { CurrencyEnum } from 'src/app/constants/currency.enum';

export interface NoteBook {
  dimension: string;
  nopages: number;
  type: string;
  price: number;
  currency: CurrencyEnum;
  coverUrl?: string;
  review?: number;
}
