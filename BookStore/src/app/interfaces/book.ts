export interface Book {
    title: string;
    author: string;
    language: LanguageEnum;
    publisher: string;
    publicationDate: Date;
    price: number;
    currency: CurrencyEnum;
    coverUrl?: string;
  }