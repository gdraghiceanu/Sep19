enum LanguageEnum {
  Romanian = 'romanian',
  English = 'english'
}

enum CurrencyEnum {
  ron = 'RON',
  euro = 'Euro',
  usd = 'USD'
}

export class Book {
  title: string;
  author: string;
  language: LanguageEnum;
  publisher: string;
  publicationDate: Date;
  price: number;
  currency: CurrencyEnum;
  coverUrl?: string;
}
