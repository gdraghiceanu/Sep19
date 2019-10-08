import { Book } from "src/app/interfaces/book";
import { CurrencyEnum } from "src/app/constants/currency.enum";
import { LanguageEnum } from "src/app/constants/languages.enum";

export interface Book{
    title: string;
    author: string;
    language: LanguageEnum;
    publisher: string;
    publicationDate: Date;
    price: number;
    currency: CurrencyEnum;
    coverUrl?: string;
    rating:number;
    id:string;
}