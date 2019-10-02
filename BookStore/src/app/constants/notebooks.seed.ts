import { NoteBook } from 'src/app/interfaces/notebook';
import { CurrencyEnum } from 'src/app/constants/currency.enum';
import { from } from 'rxjs';

export const noteBooks: NoteBook[] = [
  {
    title: 'Sturdy kraft cover customizable spiral notebook journal book with logo',
    description:'Cover Material	Paper / Paperboard / PU / PVC / Fabric , Wood free paper / Offset paper	Spiral / sewn / Saddle stitch / Loose leaf / Perfect binding ',
    pages:60,
    size:'A4, A5',
    price: 12,
    currency: CurrencyEnum.usd,
    coverUrl: 'https://sc01.alicdn.com/kf/HTB1AyR1GFGWBuNjy0Fbq6z4sXXaJ/229583718/HTB1AyR1GFGWBuNjy0Fbq6z4sXXaJ.jpg_.webp',
    review:3.5
  },
  
  {
    title: 'Best selling A6 coloring diary journal wholesale paper notebooks with elastic closure and logo',
    description:'Paper / Paperboard / PU / PVC , Wood free paper / Offset paper, Spiral / sewn / Saddle stitch / Loose leaf / Perfect binding ,Bookmark / Elastic band / Pen holder',
    pages:24,
    size:'A6, A5, B6',
    price: 1.50,
    currency: CurrencyEnum.usd,
    coverUrl: 'https://sc01.alicdn.com/kf/HTB1IqLXRpXXXXa9XXXXq6xXFXXXJ/229583718/HTB1IqLXRpXXXXa9XXXXq6xXFXXXJ.jpg_.webp',
    review:2.6
  },
  {
    title: '2019 promotional wholesale customizable brown lined school kraft paper notebook ',
    description:'Type:exercise book,Style:softcoverCover ,Material Pape Inner ,Usage:school,exercise book school book Saddle stitch / Loose leaf',
    pages:32,
    size:'A4, A5, A6',
    price: 1.90,
    currency: CurrencyEnum.usd,
    coverUrl: 'https://sc01.alicdn.com/kf/HTB1SmOjaZvrK1Rjy0Feq6ATmVXa7/229583718/HTB1SmOjaZvrK1Rjy0Feq6ATmVXa7.jpg_.webp',
    review:5
  },
  {
    title: 'Wholesale cheap school exercise notebook for writing student kraft paper ',
    description:'Application:Promotion/gift/office use, Cover Material:	Paper leather Cover printing	blind debossing with labon  Color	Black,red,white,blue,green Usage:school,exercise book',
    pages:96,
    size:'A5',
    price: 2.99,
    currency: CurrencyEnum.usd,
    coverUrl: 'https://sc01.alicdn.com/kf/HTB1QuhteoGF3KVjSZFvq6z_nXXaT/231753611/HTB1QuhteoGF3KVjSZFvq6z_nXXaT.jpg_.webp',
    review:4
  },
  {
    title: 'a5 school notebook cover blank paper notebook cheap bulk 3d lenticular notebook',
    description:'PET Material:0.35mm, 0.45mm, 0.6mm,0.9mm, PP Material:0.35mm,0.45mm, 0.53mm, 0.6mm,Other customized size are acceptable, Deep 3D effect',
    pages:80,
    size:'A5',
    price: 2,
    currency: CurrencyEnum.usd,
    coverUrl: 'https://sc02.alicdn.com/kf/H9b9828de121545e88d32ad3af17e8bece/a5-school-notebook-cover-blank-paper-notebook.png',
    review:1.5
  }
];
