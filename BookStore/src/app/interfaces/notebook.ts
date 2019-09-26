import { CurrencyEnum } from 'src/app/constants/currency.enum';

export interface NoteBook{
    title: string;
    description: string;
    pages:number;
    size:string;
    price: number;
    currency: CurrencyEnum;
    coverUrl?: string; 
}