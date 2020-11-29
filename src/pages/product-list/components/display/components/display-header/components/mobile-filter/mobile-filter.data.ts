import { OrderTypes } from 'lib/enums';
import { translate } from 'lib/translate';

export interface IFilterItem {
  header: ILinkItem;
  links: ILinkItem[];
}

interface ILinkItem {
  title: string;
  order?: OrderTypes;
}

const filterData: IFilterItem[] = [
  {
    header: {
      title: translate('MegaMall_Mobile_Filter_Sort', 'Сортирај')
    },
    links: [
      {
        title: translate('MegaMall_Mobile_Filter_High', 'Висока > ниска'),
        order: OrderTypes.PriceDescending
      },
      {
        title: translate('MegaMall_Mobile_Filter_Low', 'Ниска > висока'),
        order: OrderTypes.PriceAscending
      },
      {
        title: translate('MegaMall_Mobile_Filter_Latest', 'Најнови'),
        order: OrderTypes.Latest
      }
    ]
  }
  // {
  //   header: {
  //     title: translate('MegaMall_Mobile_Filter_Manufacturer', 'Производител')
  //   },
  //   links: [
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Acer', 'Acer'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Apple', 'Apple'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Allienware', 'Allienware'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Dell', 'Dell'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_HP', 'HP'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Lenovo', 'Lenovo'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Skytech', 'Skytech Gaming'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Samsung', 'Samsung'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Toshiba', 'Toshiba'),
  //       link: '#'
  //     }
  //   ]
  // },
  // {
  //   header: {
  //     title: translate('MegaMall_Mobile_Filter_Shops', 'Продавници')
  //   },
  //   links: [
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Anhoch', 'Анхоч'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Setec', 'Сетек'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Neptun', 'Нептун'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Niko', 'Нико компјутери'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Makpetrol', 'Макпетрол Dell'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Techno', 'Техно маркет'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Premium', 'Премиум компјутери'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Wort', 'Вортекс компјутери'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Deka', 'Дека електроникс'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Maks', 'Макс компјутери'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_Elektro', 'Електро Механика'),
  //       link: '#'
  //     },
  //     {
  //       title: translate('MegaMall_Mobile_Filter_DDStore', 'DDStore LTD'),
  //       link: '#'
  //     }
  //   ]
  // }
];

export { filterData };
