<<<<<<< HEAD

=======
>>>>>>> 1e9bcae486024d6a0e6e3d232b58b78c08d712d1
import { LanguageEnum } from 'src/app/constants/language.enum';
import { CurrencyEnum } from 'src/app/constants/currency.enum';

export interface Book{
    title: string;
    author: string;
    language: LanguageEnum;
    publisher: string;
    publicationDate: Date;
    price: number;
    currency: CurrencyEnum;
<<<<<<< HEAD
    coverUrl?: string; 
=======
    coverUrl?: string;
>>>>>>> 1e9bcae486024d6a0e6e3d232b58b78c08d712d1
}