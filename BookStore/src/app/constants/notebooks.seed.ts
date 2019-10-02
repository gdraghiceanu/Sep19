import { NoteBook } from 'src/app/interfaces/notebook';
import { CurrencyEnum } from 'src/app/constants/currency.enum';

export const notebooks: NoteBook[] = [
  {
    dimension: "A4",
    nopages: 60,
    type: "math",
    price: 13,
    currency: CurrencyEnum.euro,
    coverUrl: 'https://images.foyles.co.uk/xlarge/books/img/0/2/6/9780261103573.jpg',
    review: 4.1,
  },
  {
    dimension: "A3",
    nopages: 160,
    type: "math",
    price: 23,
    currency: CurrencyEnum.euro,
    coverUrl: 'https://images.foyles.co.uk/xlarge/books/img/0/2/6/9780261103573.jpg',
    review: 4.1,
  },
  {
    dimension: "A2",
    nopages: 260,
    type: "math",
    price: 33,
    currency: CurrencyEnum.euro,
    coverUrl: 'https://images.foyles.co.uk/xlarge/books/img/0/2/6/9780261103573.jpg',
    review: 4.1,
  }
];
