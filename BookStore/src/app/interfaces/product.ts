import { CurrencyEnum } from '../constants/currency.enum';

export interface Product {
    title: string;
    coverUrl?: string;
    price: number;
    currency: CurrencyEnum;
    review?: number;
}
