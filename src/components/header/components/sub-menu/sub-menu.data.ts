import { CategoryTypes } from 'lib/enums';

export interface ISubmenuItem {
  type: CategoryTypes;
  data: IData;
}

interface IData {
  left: IBoxItem;
  right: IBoxItem;
  side: IBoxItem;
}

interface IBoxItem {
  title: string;
  items: IItem[];
  url?: string;
}

interface IItem {
  id: number;
  title: string;
  url?: string;
}

const submenuItems: ISubmenuItem[] = [
  {
    type: CategoryTypes.Technology,
    data: {
      left: {
        title: 'Компјутери и опрема',
        items: [
          {
            id: 1,
            title: 'Персонални компјутери'
          },
          {
            id: 2,
            title: 'Преносни компјутери'
          },
          {
            id: 3,
            title: 'Опрема за лаптоп'
          },
          {
            id: 4,
            title: 'Глувчиња'
          },
          {
            id: 5,
            title: 'Тастатури'
          },
          {
            id: 6,
            title: 'Компјутерски звучници'
          }
        ]
      },
      right: {
        title: 'Мобилни телефони',
        items: [
          {
            id: 1,
            title: 'Маски за телефон'
          },
          {
            id: 2,
            title: 'Маска предна'
          },
          {
            id: 3,
            title: 'Предно стакло тач-бело'
          },
          {
            id: 4,
            title: 'Дисплеј црн'
          },
          {
            id: 5,
            title: 'Батерии'
          },
          {
            id: 6,
            title: 'Задни капачиња'
          }
        ]
      },
      side: {
        title: 'Slika1',
        items: [
          {
            id: 1,
            title: 'Slika1',
            url: '/assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Sport,
    data: {
      left: {
        title: 'Спорт1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Спорт2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      side: {
        title: 'Slika2',
        items: [
          {
            id: 1,
            title: 'Slika2',
            url: 'assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Fashion,
    data: {
      left: {
        title: 'Мода1',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Мода2',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      side: {
        title: 'Slika2',
        items: [
          {
            id: 1,
            title: 'Slika2',
            url: 'assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Beauty,
    data: {
      left: {
        title: 'Здравје и убавина',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Здравје и убавина',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      side: {
        title: 'Slika2',
        items: [
          {
            id: 1,
            title: 'Slika2',
            url: 'assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Home,
    data: {
      left: {
        title: 'Домакинство',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Домакинство',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      side: {
        title: 'Slika2',
        items: [
          {
            id: 1,
            title: 'Slika2',
            url: 'assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  },
  {
    type: CategoryTypes.Services,
    data: {
      left: {
        title: 'Услуги',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      right: {
        title: 'Услуги',
        items: [
          {
            id: 1,
            title: 'Тест'
          },
          {
            id: 2,
            title: 'Тест'
          }
        ]
      },
      side: {
        title: 'Slika2',
        items: [
          {
            id: 1,
            title: 'Slika2',
            url: 'assets/images/main/Najnovite-patiki-na-nike.jpg'
          }
        ]
      }
    }
  }
];

export { submenuItems };
