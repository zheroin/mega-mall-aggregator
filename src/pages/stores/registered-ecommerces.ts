const allEcommerces = [
  {
    id: 1,
    ecommerceName: 'А1',
    ecommerceLink: 'https://www.a1.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/a1.png',
    ecommerceCategory: 'services / technology / mobile phones'
  },
  {
    id: 2,
    ecommerceName: 'Адванс медиа',
    ecommerceLink: 'https://advancemedia.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/advance-media.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 3,
    ecommerceName: 'Агенс',
    ecommerceLink: 'http://www.agens.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/agens.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 4,
    ecommerceName: 'Агрохемија',
    ecommerceLink: 'https://agrohemija.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/agrohemija.png',
    ecommerceCategory: 'home / garden'
  },
  {
    id: 5,
    ecommerceName: 'Агротехна',
    ecommerceLink: 'http://www.agrotehna.com.mk',
    ecommerceLogo: '/assets/images/stores/stores-book/agrotehna.png',
    ecommerceCategory: 'technology / home / bikes'
  },
  {
    id: 6,
    ecommerceName: 'Академска книга',
    ecommerceLink: 'https://www.akademskakniga.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/akademska-kniga.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 7,
    ecommerceName: 'Албсиг',
    ecommerceLink: 'https://www.albsig.al/',
    ecommerceLogo: '/assets/images/stores/stores-book/albsig.png',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 8,
    ecommerceName: 'Алфалаб',
    ecommerceLink: 'https://alfalab.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/alfalab.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 9,
    ecommerceName: 'Amigos',
    ecommerceLink: 'https://www.amigos.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/amigos.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 10,
    ecommerceName: 'Алфа рент',
    ecommerceLink: 'https://www.alfarentacar.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/alfa-rent.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 11,
    ecommerceName: 'Анхоч',
    ecommerceLink: 'https://www.anhoch.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/anhoch.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 12,
    ecommerceName: 'Антолог',
    ecommerceLink: 'https://antolog.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/antolog.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 13,
    ecommerceName: 'Антистрес',
    ecommerceLink: 'https://antistres.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/anti-stres.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 14,
    ecommerceName: 'Аптека ирис',
    ecommerceLink: 'https://iris-apteka.business.site/',
    ecommerceLogo: '/assets/images/stores/stores-book/apteka-iris.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 15,
    ecommerceName: 'Ариес',
    ecommerceLink: 'https://aries.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/aries-travel-agency.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 16,
    ecommerceName: 'Армариум',
    ecommerceLink: 'http://www.kosula.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/armarium.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 17,
    ecommerceName: 'Артурс',
    ecommerceLink: 'http://shop.arthurs.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/arthurs.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 18,
    ecommerceName: 'Ателје Алекстра',
    ecommerceLink: 'http://ateljealekstra.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/atelje-alekstra.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 19,
    ecommerceName: 'Ателје Доленц',
    ecommerceLink: 'https://ateljedolenc.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/atelje-dolenic.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 20,
    ecommerceName: 'Атлантик турс',
    ecommerceLink: 'https://atlantikturs.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/atlantik-turs.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 21,
    ecommerceName: 'Атлантис груп',
    ecommerceLink: 'http://www.atlantis.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/atlantis.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 22,
    ecommerceName: 'Атлас',
    ecommerceLink: 'http://www.atlas.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/atlas.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 23,
    ecommerceName: 'Аутофилтер',
    ecommerceLink: 'https://www.autofilter.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/auto-filter.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 24,
    ecommerceName: 'Авио нет',
    ecommerceLink: 'http://www.avio.net.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/avionet.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 25,
    ecommerceName: 'Авто атом',
    ecommerceLink: 'http://avtoatom.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/avto-atom.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 26,
    ecommerceName: 'Азно',
    ecommerceLink: 'https://azno.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/azno.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 27,
    ecommerceName: 'Бејби центар',
    ecommerceLink: 'http://www.babycentar.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/baby-centar.png',
    ecommerceCategory: 'fashion / kids /'
  },
  {
    id: 28,
    ecommerceName: 'Балкан нет',
    ecommerceLink: 'http://balkannet.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/balkan-travel-agency.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 29,
    ecommerceName: 'Балкан турист',
    ecommerceLink: 'https://www.balkanturist.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/balkan-turist.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 30,
    ecommerceName: 'Балкан виатор',
    ecommerceLink: 'https://www.balkanviator.com/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/balkan-viator.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 31,
    ecommerceName: 'Бато анд дивајн',
    ecommerceLink: 'http://www.batodivajn.com/MK/default.aspx',
    ecommerceLogo: '/assets/images/stores/stores-book/bato-i-divajn.png',
    ecommerceCategory: 'services / print'
  },
  {
    id: 32,
    ecommerceName: 'Бебе хоум',
    ecommerceLink: 'https://bebehome.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bebe-home.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 33,
    ecommerceName: 'Беко',
    ecommerceLink: 'http://www.beko-mk.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/beko.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 34,
    ecommerceName: 'Беламед',
    ecommerceLink: 'http://shop.belamed.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/belamed.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 35,
    ecommerceName: 'Бела виста',
    ecommerceLink: 'https://www.bellavista.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bella-vista.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 36,
    ecommerceName: 'Беванда',
    ecommerceLink: 'https://bevanda.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bevanda.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 37,
    ecommerceName: 'Бифекс',
    ecommerceLink: 'https://www.bifeks.com/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bifeks.png',
    ecommerceCategory: 'fashion / home'
  },
  {
    id: 38,
    ecommerceName: 'Бисер охрид',
    ecommerceLink: 'http://www.biser.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/biser-import.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 39,
    ecommerceName: 'Блесок',
    ecommerceLink: 'https://blesok.mk/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/blesok-bookstore.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 40,
    ecommerceName: 'Блум',
    ecommerceLink: 'https://cvekarabloom.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bloom.png',
    ecommerceCategory: 'services / flowers'
  },
  {
    id: 41,
    ecommerceName: 'Блу маркет',
    ecommerceLink: 'http://www.bluemarket.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/blue-market.png',
    ecommerceCategory: 'home / bathroom'
  },
  {
    id: 42,
    ecommerceName: 'Blue Namad',
    ecommerceLink: 'https://7grama.coffee/',
    ecommerceLogo: '/assets/images/stores/stores-book/blue-namad.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 43,
    ecommerceName: 'Бонати',
    ecommerceLink: 'https://bonatti.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bonatti.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 44,
    ecommerceName: 'Борка',
    ecommerceLink: 'https://borka.org.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/borka.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 45,
    ecommerceName: 'Браинстер',
    ecommerceLink: 'https://brainster.co/',
    ecommerceLogo: '/assets/images/stores/stores-book/brainster.png',
    ecommerceCategory: 'services / education / courses'
  },
  {
    id: 46,
    ecommerceName: 'Бубамара',
    ecommerceLink: 'https://bubamara.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bubamara.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 47,
    ecommerceName: 'Buzz',
    ecommerceLink: 'https://www.buzzsneakers.com/MAK_mk',
    ecommerceLogo: '/assets/images/stores/stores-book/buzz.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 48,
    ecommerceName: 'B watch',
    ecommerceLink: 'https://bwatch.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/bwatch.png',
    ecommerceCategory: 'fashion / watches / accessories'
  },
  {
    id: 49,
    ecommerceName: 'Каливита',
    ecommerceLink: 'https://macedonia.calivita.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/calivita.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 50,
    ecommerceName: 'City box',
    ecommerceLink: 'https://www.citybox.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/citybox.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 51,
    ecommerceName: 'Камуфлаж',
    ecommerceLink: 'http://camouflage.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/camouflage.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 52,
    ecommerceName: 'Скопје сити мол',
    ecommerceLink: 'http://skopjecitymall.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/citymall.png',
    ecommerceCategory: 'fashion / home / technology'
  },
  {
    id: 53,
    ecommerceName: 'Комодита',
    ecommerceLink: 'https://www.comoditahome.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/comodita.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 54,
    ecommerceName: 'Кроација осигурување',
    ecommerceLink: 'https://cro.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/croatia-osiguruvanje.png',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 55,
    ecommerceName: 'ДД хост',
    ecommerceLink: 'https://ddhost.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dd-host.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 56,
    ecommerceName: 'Делта спорт',
    ecommerceLink: 'https://www.dsport.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dsport.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 57,
    ecommerceName: 'Декси ко',
    ecommerceLink: 'http://www.deksiko.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/dexy-co-kids.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 58,
    ecommerceName: 'Дигинет',
    ecommerceLink: 'http://diginet.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/diginet.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 59,
    ecommerceName: 'Дигитал алб',
    ecommerceLink: 'https://www.digitalb.al/',
    ecommerceLogo: '/assets/images/stores/stores-book/digital-alb.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 60,
    ecommerceName: 'Dish-wish',
    ecommerceLink: 'https://dishwish.mk/home',
    ecommerceLogo: '/assets/images/stores/stores-book/dish-wish.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 61,
    ecommerceName: 'Djolev and the arts',
    ecommerceLink: 'https://djolevandthearts.edu.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/djolev.png',
    ecommerceCategory: 'services / education / courses'
  },
  {
    id: 62,
    ecommerceName: 'Дигитал арт',
    ecommerceLink: 'https://www.digitalartmk.com/mk',
    ecommerceLogo: '/assets/images/stores/stores-book/digital-art.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 63,
    ecommerceName: 'Дим стор',
    ecommerceLink: 'https://dimstore.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dimstore.png',
    ecommerceCategory: 'technology / home / beauty / health'
  },
  {
    id: 64,
    ecommerceName: 'Дивано',
    ecommerceLink: 'https://www.divano.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/divano.png',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 65,
    ecommerceName: 'D mall',
    ecommerceLink: 'https://dmall.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/d-mall.png',
    ecommerceCategory: 'home / fashion'
  },
  {
    id: 66,
    ecommerceName: 'Dominos',
    ecommerceLink: 'https://www.dominos.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dominos-pizza.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 67,
    ecommerceName: 'Donut bar',
    ecommerceLink: 'https://donutbar.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/donut-bar.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 68,
    ecommerceName: 'Dolce',
    ecommerceLink: 'https://www.dolce.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dolce.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 69,
    ecommerceName: 'Драмски театар',
    ecommerceLink: 'https://dramskiteatar.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dramski-teatar.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 70,
    ecommerceName: 'Drop in',
    ecommerceLink: 'https://dropin.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/drop-in.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 71,
    ecommerceName: 'Dr Robinson',
    ecommerceLink: 'http://www.drrobinson.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/dr-robinson.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 72,
    ecommerceName: 'Дуна',
    ecommerceLink: 'https://shop.duna.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/duna.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 73,
    ecommerceName: 'Дурис',
    ecommerceLink: 'http://www.duris.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/duris.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 74,
    ecommerceName: 'Дурмо турс',
    ecommerceLink: 'http://durmotours.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/durmo-turs.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 75,
    ecommerceName: 'Е-автобуска',
    ecommerceLink: 'http://e-avtobuska.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/e-avtobuska.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 76,
    ecommerceName: 'Е-бутик',
    ecommerceLink: 'https://e-butik.mk/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/e-butic.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 77,
    ecommerceName: 'Е-фото',
    ecommerceLink: 'http://www.efoto.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/efoto.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 78,
    ecommerceName: 'Е-хорека',
    ecommerceLink: 'https://e-horeca.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ehoreca.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 79,
    ecommerceName: 'Електронабава',
    ecommerceLink: 'http://www.elektronabava.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/elektronabava.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 80,
    ecommerceName: 'Еликсир',
    ecommerceLink: 'https://e-elixir.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/eliksir.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 81,
    ecommerceName: 'Elipso',
    ecommerceLink: 'https://www.elipso.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/elipso.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 82,
    ecommerceName: 'Елинг',
    ecommerceLink: 'http://www.eling.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/eling.png',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 83,
    ecommerceName: 'Енци Менци',
    ecommerceLink: 'https://www.encimenci.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/enci-menci.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 84,
    ecommerceName: 'Еуробус',
    ecommerceLink: 'https://eurobus.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/euro-bus.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 85,
    ecommerceName: 'Еуролинк',
    ecommerceLink: 'https://eurolink.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/eurolink.png',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 86,
    ecommerceName: 'Евн',
    ecommerceLink: 'https://www.evn.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/evn.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 87,
    ecommerceName: 'Европа',
    ecommerceLink: 'https://evropa.com.mk/mk/pocetna',
    ecommerceLogo: '/assets/images/stores/stores-book/evropa.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 88,
    ecommerceName: 'Екстрем интимо',
    ecommerceLink: 'https://www.extremeintimo.com/mk/home',
    ecommerceLogo: '/assets/images/stores/stores-book/extreme-intimo.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 89,
    ecommerceName: 'For lady',
    ecommerceLink: 'https://forlady.com.mk/home/',
    ecommerceLogo: '/assets/images/stores/stores-book/forlady.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 90,
    ecommerceName: 'Фешн груп',
    ecommerceLink: 'https://www.fashiongroup.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/fashion-group.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 91,
    ecommerceName: 'ФФМ',
    ecommerceLink: 'https://ffm.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ffm.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 91,
    ecommerceName: 'Фила ',
    ecommerceLink: 'http://filla.com.mk/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/filla.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 92,
    ecommerceName: 'Fitflow',
    ecommerceLink: 'https://fitflow.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/fitflow.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 93,
    ecommerceName: 'Флорис',
    ecommerceLink: 'http://www.floris.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/floris.png',
    ecommerceCategory: 'home / '
  },
  {
    id: 94,
    ecommerceName: 'Фридај шоп',
    ecommerceLink: 'https://fridayshop.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/friday-shop.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 95,
    ecommerceName: 'Garmin',
    ecommerceLink: 'https://garmin.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/garmin.png',
    ecommerceCategory: 'fashion / watches '
  },
  {
    id: 96,
    ecommerceName: 'Gemak',
    ecommerceLink: 'https://gemak.mk/en/home-en/',
    ecommerceLogo: '/assets/images/stores/stores-book/gemak.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 97,
    ecommerceName: 'Гизмо',
    ecommerceLink: 'http://www.gizmo.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/gizmo.png',
    ecommerceCategory: 'other / '
  },
  {
    id: 98,
    ecommerceName: 'Го хост',
    ecommerceLink: 'https://www.gohost.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/go-host.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 99,
    ecommerceName: 'Го травел',
    ecommerceLink: 'https://gotravel.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/go-travel.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 100,
    ecommerceName: 'Грее ',
    ecommerceLink: 'http://www.gree.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/gree.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 101,
    ecommerceName: 'Групер',
    ecommerceLink: 'https://grouper.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/grouper.png',
    ecommerceCategory: 'home / fashion / technology / beauty / health'
  },
  {
    id: 102,
    ecommerceName: 'Гуми',
    ecommerceLink: 'https://gumi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/gumi.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 103,
    ecommerceName: 'Hanters style',
    ecommerceLink: 'https://mbody.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/hanters-style.png',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 104,
    ecommerceName: 'Халкбанка',
    ecommerceLink: 'https://www.halkbank.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/halkbank.png',
    ecommerceCategory: 'other / '
  },
  {
    id: 105,
    ecommerceName: 'Харбини',
    ecommerceLink: 'https://www.clubeconomy.com.mk/harbini',
    ecommerceLogo: '/assets/images/stores/stores-book/harbini-cosmetic.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 106,
    ecommerceName: 'Хербалајф',
    ecommerceLink: 'https://www.herbalife.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/herbalife.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 107,
    ecommerceName: 'Хипо',
    ecommerceLink: 'https://hippo.ukionshops.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/hippo.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 108,
    ecommerceName: 'Хост ',
    ecommerceLink: 'https://www.host.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/host.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 109,
    ecommerceName: 'Хотел Амбасадор',
    ecommerceLink: 'https://hotelambasador.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/hotel-ambassador.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 110,
    ecommerceName: 'Хотел Дрим',
    ecommerceLink: 'http://www.voyager.com.mk/hotel-drim/',
    ecommerceLogo: '/assets/images/stores/stores-book/hotel-drim.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 111,
    ecommerceName: 'Хотел Инекс',
    ecommerceLink: 'http://www.voyager.com.mk/hotel-ineks-olgica-hotel-spa/',
    ecommerceLogo: '/assets/images/stores/stores-book/hotel-inex.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 112,
    ecommerceName: 'Хотел Салида',
    ecommerceLink: 'https://www.hotelsalida.com.mk/mk/hotel/ivo-lola-ribar/',
    ecommerceLogo: '/assets/images/stores/stores-book/hotel-salida.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 113,
    ecommerceName: 'HP store',
    ecommerceLink: 'http://www.hpstore.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/hp-store.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 114,
    ecommerceName: 'Id design',
    ecommerceLink: 'https://iddesign.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/id-design.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 115,
    ecommerceName: 'Игал',
    ecommerceLink: 'https://igal.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/igal-group.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 116,
    ecommerceName: 'Inform',
    ecommerceLink: 'https://inform.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/inform.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 117,
    ecommerceName: 'In host',
    ecommerceLink: 'https://inhost.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/inhost.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 118,
    ecommerceName: 'Inovation',
    ecommerceLink: 'https://innovation.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/innovation.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 119,
    ecommerceName: 'Istyle',
    ecommerceLink: 'https://istyle.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/istyle.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 120,
    ecommerceName: 'Итеа ',
    ecommerceLink: 'https://itea.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/itea.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 121,
    ecommerceName: 'Jakomo pizza',
    ecommerceLink: 'https://pizzajakomo.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/jakomo-pizza.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 122,
    ecommerceName: 'Jk travel',
    ecommerceLink: 'https://jk.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/jk-travel.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 123,
    ecommerceName: 'Jugoexport stil',
    ecommerceLink: 'https://jugoexport.mk/?gclid=CjwKCAjw0On8BRAgEiwAincsHHcEsLcsyQrI4tmlUGWgqaO7ojs1Sg26y6kTnBPUGZc0ztrs83kM-hoChhwQAvD_BwE',
    ecommerceLogo: '/assets/images/stores/stores-book/jugoexport-stil.png',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 124,
    ecommerceName: 'Katastar',
    ecommerceLink: 'https://www.katastar.gov.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/katastar.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 125,
    ecommerceName: 'Katlanovska banja',
    ecommerceLink: 'https://www.katlanovskaspa.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/katlanovska-banja.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 126,
    ecommerceName: 'Kegi shoes',
    ecommerceLink: 'https://kegishoes.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/kegi-shoes.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 127,
    ecommerceName: 'Kelepur',
    ecommerceLink: 'https://kelepur.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/kelepur.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 128,
    ecommerceName: 'Kendy',
    ecommerceLink: 'http://www.kendy.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kendy.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 129,
    ecommerceName: 'Key',
    ecommerceLink: 'https://key.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/key.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 130,
    ecommerceName: 'Kibs trust',
    ecommerceLink: 'https://www.kibstrust.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kibs-trust.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 131,
    ecommerceName: 'Kidling',
    ecommerceLink: 'https://kidling.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kidling.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 132,
    ecommerceName: 'Klever',
    ecommerceLink: 'https://www.klever.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/klever.png',
    ecommerceCategory: 'services / office'
  },
  {
    id: 133,
    ecommerceName: 'Klikni jadi',
    ecommerceLink: 'https://www.kliknijadi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/klikni-jadi.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 134,
    ecommerceName: 'Klikni kupi',
    ecommerceLink: 'https://www.kliknikupi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/klikni-kupi.png',
    ecommerceCategory: 'technology / home / beauty / health'
  },
  {
    id: 135,
    ecommerceName: 'Klimi',
    ecommerceLink: 'https://klimi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/klimi.png',
    ecommerceCategory: 'home / '
  },
  {
    id: 136,
    ecommerceName: 'Книга - Издравачки центар три',
    ecommerceLink: 'http://www.kniga.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kniga.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 137,
    ecommerceName: 'Kobra-T',
    ecommerceLink: 'http://www.kobrashop.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kobra-t.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 138,
    ecommerceName: 'Kongres centar servis',
    ecommerceLink: 'http://kscnet.com/skopje/index.php/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kongres-servis-centar.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 139,
    ecommerceName: 'Култура',
    ecommerceLink: 'https://kultura.com.mk/kategorija/knigi/',
    ecommerceLogo: '/assets/images/stores/stores-book/kultura.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 140,
    ecommerceName: 'Културна ризница',
    ecommerceLink: 'https://www.kulturnariznica.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kulturna-riznica.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 141,
    ecommerceName: 'Купер',
    ecommerceLink: 'https://www.kuper.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kuper.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 142,
    ecommerceName: 'Купи гуми',
    ecommerceLink: 'http://www.kupigumi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kupi-gumi.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 143,
    ecommerceName: 'Купи карти за се',
    ecommerceLink: 'https://www.kupikartizase.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/kupi-karti-za-se.png',
    ecommerceCategory: 'services / events'
  },
  {
    id: 144,
    ecommerceName: 'Купи Книга',
    ecommerceLink: 'https://kupikniga.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/kupi-kniga.png',
    ecommerceCategory: 'services / events'
  },
  {
    id: 145,
    ecommerceName: 'Ласерско гравирање',
    ecommerceLink: 'https://laserskograviranje.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lasersko-graviranje.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 146,
    ecommerceName: 'Ledikom',
    ecommerceLink: 'https://ledikom.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ledikom.png',
    ecommerceCategory: 'technology / mobile devices'
  },
  {
    id: 147,
    ecommerceName: 'Лед маркет',
    ecommerceLink: 'https://ledmarket.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/led-market.png',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 148,
    ecommerceName: 'Legis',
    ecommerceLink: 'http://www.legis.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/legis.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 149,
    ecommerceName: 'Lenovo',
    ecommerceLink: 'https://lenovoonline.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lenovo.png',
    ecommerceCategory: 'technology / '
  },
  {
    id: 150,
    ecommerceName: 'Lets fund it',
    ecommerceLink: 'https://www.letsfundit.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lets-fund-it.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 151,
    ecommerceName: 'Lial',
    ecommerceLink: 'http://www.lial.com.mk/mk/Home/Index',
    ecommerceLogo: '/assets/images/stores/stores-book/lial.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 152,
    ecommerceName: 'Lisca',
    ecommerceLink: 'https://www.lisca.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lisca.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 153,
    ecommerceName: 'Литература',
    ecommerceLink: 'https://www.literatura.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/literatura.png',
    ecommerceCategory: 'services / education / books'
  },
  {
    id: 154,
    ecommerceName: 'Loco Croco',
    ecommerceLink: 'https://lococroco.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/loco-groco.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 155,
    ecommerceName: 'Loging electronics',
    ecommerceLink: 'http://www.loging.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/loging-electronics.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 156,
    ecommerceName: 'Лотус',
    ecommerceLink: 'https://lotus.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lotus.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 157,
    ecommerceName: 'Lush',
    ecommerceLink: 'https://www.lush.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/lush.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 158,
    ecommerceName: 'Macedonia travel',
    ecommerceLink: 'https://www.macedoniatravel.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/macedonia-travel.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 159,
    ecommerceName: 'Моб',
    ecommerceLink: 'https://operabalet.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/makedonska-opera-i-balet.png',
    ecommerceCategory: 'services / events'
  },
  {
    id: 160,
    ecommerceName: 'Македонско кредитно биро',
    ecommerceLink: 'https://mkb.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/makedonsko-kreditno-biro.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 161,
    ecommerceName: 'Мако цигре',
    ecommerceLink: 'https://mako-cigre.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mako-cigre.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 162,
    ecommerceName: 'Мак сторе',
    ecommerceLink: 'https://makstore.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mak-store.png',
    ecommerceCategory: 'fashion'
  },
  {
    id: 163,
    ecommerceName: 'Mak swiss',
    ecommerceLink: 'https://makswiss.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mak-swiss.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 164,
    ecommerceName: 'Маркет конект',
    ecommerceLink: 'https://marketkonekt.com/makedonija',
    ecommerceLogo: '/assets/images/stores/stores-book/marketkonekt.png',
    ecommerceCategory: 'technology / home / beauty / health / fashion / services'
  },
  {
    id: 165,
    ecommerceName: 'Математика',
    ecommerceLink: 'https://matematika.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/matematika.png',
    ecommerceCategory: 'services / education'
  },
  {
    id: 166,
    ecommerceName: 'Max hosting',
    ecommerceLink: 'https://www.maxhosting.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/max-hosting.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 167,
    ecommerceName: 'Mbody',
    ecommerceLink: 'https://mbody.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mbody.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 168,
    ecommerceName: 'Мебел Ви',
    ecommerceLink: 'https://www.mebel-vi.com/?gclid=CjwKCAjw0On8BRAgEiwAincsHPiriLHJYVV8YBmjhIl33Z1c_YsWSPRICdZ4RD_wT5vmhFCGyXca4BoC_j0QAvD_BwE',
    ecommerceLogo: '/assets/images/stores/stores-book/mebel-vi.png',
    ecommerceCategory: 'home / furniture'
  },
  {
    id: 169,
    ecommerceName: 'Media plan',
    ecommerceLink: 'http://www.mediaplan.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/media-plan.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 170,
    ecommerceName: 'Мега попуст',
    ecommerceLink: 'https://megapopust.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mega-popust.png',
    ecommerceCategory: 'home / fashion'
  },
  {
    id: 171,
    ecommerceName: 'Megasport',
    ecommerceLink: 'https://megasportonlineshop.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/megasport.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 172,
    ecommerceName: 'Металотехника',
    ecommerceLink: 'http://www.metalotehnika.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/metalotehnika.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 173,
    ecommerceName: 'Хотел Метропол',
    ecommerceLink: 'https://metropol-ohrid.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/metropol-lake-resort.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 174,
    ecommerceName: 'Mida rent a car',
    ecommerceLink: 'https://midarentacar.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/mida-rent-a-car.png',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 175,
    ecommerceName: 'Mihail Korubin ',
    ecommerceLink: 'https://mihailkorubin.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/mihail-korubin.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 176,
    ecommerceName: 'Milkuz',
    ecommerceLink: 'http://milkuz.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/milkuz.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 177,
    ecommerceName: 'Министерство за финансии',
    ecommerceLink: 'https://www.finance.gov.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ministerstvo-za-finansii.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 178,
    ecommerceName: 'Mi store',
    ecommerceLink: 'https://www.mi-store.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mi-store.png',
    ecommerceCategory: 'technology / home / beauty / health / fashion / services'
  },
  {
    id: 179,
    ecommerceName: 'Митра',
    ecommerceLink: 'https://www.mitra.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mitra.png',
    ecommerceCategory: 'home / food / fashion'
  },
  {
    id: 180,
    ecommerceName: 'Мк хост',
    ecommerceLink: 'https://mkhost.com/mk/hosting/web-hosting?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbgE7cTpiglck7In15Uw2y-_Z0URshdxhAwDZNcdrOLShIAV4fz5DcaAiwLEALw_wcB',
    ecommerceLogo: '/assets/images/stores/stores-book/mk-host.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 181,
    ecommerceName: 'MkMage',
    ecommerceLink: 'http://mkmage.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/mk-mage.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 182,
    ecommerceName: 'Младински културен центар',
    ecommerceLink: 'https://mkc.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mladinski-kulturen-centar.png',
    ecommerceCategory: 'services / education / books / events'
  },
  {
    id: 183,
    ecommerceName: 'MM toys',
    ecommerceLink: 'http://www.mmtoys.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mm-toys.png',
    ecommerceCategory: 'fashion / kids / accessories'
  },
  {
    id: 184,
    ecommerceName: 'МНТ',
    ecommerceLink: 'https://mnt.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mnt.png',
    ecommerceCategory: 'services /  events'
  },
  {
    id: 185,
    ecommerceName: 'Мое кафе',
    ecommerceLink: 'https://moekafe.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/moekafe.png',
    ecommerceCategory: 'servics / food'
  },
  {
    id: 186,
    ecommerceName: 'Moj тонер',
    ecommerceLink: 'https://www.mojtoner.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/moj-toner.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 187,
    ecommerceName: 'Mtd gradina',
    ecommerceLink: 'https://mtdgradina.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/mtd-gradina.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 188,
    ecommerceName: 'Multi media',
    ecommerceLink: 'http://www.multimedia.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/multi-media.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 189,
    ecommerceName: 'Murino art',
    ecommerceLink: 'https://muranoart.mk/shop/',
    ecommerceLogo: '/assets/images/stores/stores-book/murino-art.png',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 190,
    ecommerceName: 'My moda',
    ecommerceLink: 'https://mymoda.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/my-moda.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 191,
    ecommerceName: 'My time',
    ecommerceLink: 'https://www.mytime.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/my-time.png',
    ecommerceCategory: 'fashion / watches / accessories'
  },
  {
    id: 192,
    ecommerceName: 'На акција',
    ecommerceLink: 'http://www.naakcija.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/na-akcija.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 193,
    ecommerceName: 'Нарачај',
    ecommerceLink: 'https://naracaj.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/naracaj.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 194,
    ecommerceName: 'Нео тел',
    ecommerceLink: 'https://neotel.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/neo-tel.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 195,
    ecommerceName: 'Нептун',
    ecommerceLink: 'https://www.neptun.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/neptun.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 196,
    ecommerceName: 'Next-gen',
    ecommerceLink: 'http://www.nextgen.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/next-gen.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 197,
    ecommerceName: 'Nikmit',
    ecommerceLink: 'https://nikmit.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/nikmit.png',
    ecommerceCategory: 'fashion / home'
  },
  {
    id: 198,
    ecommerceName: 'Niko computers',
    ecommerceLink: 'http://niko.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/niko-computers.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 199,
    ecommerceName: 'Nina box',
    ecommerceLink: 'http://www.ninabox.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ninabox.png',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 200,
    ecommerceName: 'Nutrivita shop',
    ecommerceLink: 'http://nutrivita.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/nutri-vita-shop.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 201,
    ecommerceName: 'Ohrid pearl Filevi',
    ecommerceLink: 'http://ohridpearl.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/ohrid-pearl-filevi.png',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 202,
    ecommerceName: 'Olimpiko',
    ecommerceLink: 'https://olimpiko.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/olimpiko.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 203,
    ecommerceName: 'Orfej',
    ecommerceLink: 'http://www.orfej.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/orfej.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 204,
    ecommerceName: 'Oriflame',
    ecommerceLink: 'https://mk.oriflame.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/oriflame.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 205,
    ecommerceName: 'Outlet on',
    ecommerceLink: 'https://outleton.com/mk?',
    ecommerceLogo: '/assets/images/stores/stores-book/outlet-on.png',
    ecommerceCategory: 'home / technology / sport / fashion'
  },
  {
    id: 206,
    ecommerceName: 'Ozone gold',
    ecommerceLink: 'https://www.ozone-gold.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/ozonegold.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 207,
    ecommerceName: 'Пакет',
    ecommerceLink: 'https://www.paket.mk/?gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xbhyv7iJsLWhTOViBbN78J0Ixb3QJIjO1rKaPMEMKZb_E9dTtQDO6caAkl7EALw_wcB',
    ecommerceLogo: '/assets/images/stores/stores-book/paket.png',
    ecommerceCategory: 'services /  food'
  },
  {
    id: 208,
    ecommerceName: 'Paradiso fly',
    ecommerceLink: 'https://paradisofly.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/paradiso-fly.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 209,
    ecommerceName: 'Пазар 3',
    ecommerceLink: 'https://www.pazar3.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pazar-3.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 210,
    ecommerceName: 'Печат плус',
    ecommerceLink: 'https://pecat.plus/',
    ecommerceLogo: '/assets/images/stores/stores-book/pecat-plus.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 211,
    ecommerceName: 'Пелет центар',
    ecommerceLink: 'http://peletcentar.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pelet-centar.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 212,
    ecommerceName: 'Перла',
    ecommerceLink: 'https://www.perla.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/perla.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 213,
    ecommerceName: 'Pix +',
    ecommerceLink: 'http://www.pixplus.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pix-plus.png',
    ecommerceCategory: 'technolgy /'
  },
  {
    id: 214,
    ecommerceName: 'Pizza Hot Delivery',
    ecommerceLink: 'https://pizzahot.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pizza-hot-delivery.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 215,
    ecommerceName: 'Pneumatik',
    ecommerceLink: 'https://pneumatik.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pneumatik.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 216,
    ecommerceName: 'Поц',
    ecommerceLink: 'https://poc.mk/pocetna/',
    ecommerceLogo: '/assets/images/stores/stores-book/poc.png',
    ecommerceCategory: 'other / '
  },
  {
    id: 217,
    ecommerceName: 'Подари',
    ecommerceLink: 'https://podari.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/podari.png',
    ecommerceCategory: 'other / '
  },
  {
    id: 218,
    ecommerceName: 'Polleosport',
    ecommerceLink: 'https://polleosport.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/polleosport.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 219,
    ecommerceName: 'Polyesterday',
    ecommerceLink: 'https://www.polyesterday.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/polyesterday.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 220,
    ecommerceName: 'Потрчко',
    ecommerceLink: 'https://potrcko.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/potrcko.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 221,
    ecommerceName: 'Premium computers',
    ecommerceLink: 'https://www.premium.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/premium-computers.png',
    ecommerceCategory: 'technology '
  },
  {
    id: 222,
    ecommerceName: 'Преплет',
    ecommerceLink: 'https://preplet.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/preplet.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 223,
    ecommerceName: 'Претприемач',
    ecommerceLink: 'http://www.pretpriemac.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/pretpriemac.png',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 224,
    ecommerceName: 'Promo concept',
    ecommerceLink: 'http://www.promoconcept.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/promo-concept.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 225,
    ecommerceName: 'Прв до врв',
    ecommerceLink: 'http://www.prvdovrv.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/prv-do-vrv.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 226,
    ecommerceName: 'Refan',
    ecommerceLink: 'https://refan.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/refan.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 227,
    ecommerceName: 'Reklama 5',
    ecommerceLink: 'https://reklama5.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/reklama-5.png',
    ecommerceCategory: 'serviecs / '
  },
  {
    id: 228,
    ecommerceName: 'Royal hotel',
    ecommerceLink: 'http://royal.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/royal-hotel.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 229,
    ecommerceName: 'Runners',
    ecommerceLink: 'https://runners.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/runners.png',
    ecommerceCategory: 'sport /'
  },
  {
    id: 230,
    ecommerceName: 'Samad',
    ecommerceLink: 'https://samad.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/samad.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 231,
    ecommerceName: 'Sara fashion',
    ecommerceLink: 'https://sarafashion.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sara-fashion.png',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 232,
    ecommerceName: 'Savana',
    ecommerceLink: 'https://www.savanaonline.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/savana.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 233,
    ecommerceName: 'Sava tours',
    ecommerceLink: 'https://www.savatours-mk.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/sava-tours.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 234,
    ecommerceName: 'Schatze',
    ecommerceLink: 'https://schatze.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/schatze.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 235,
    ecommerceName: 'Schuster',
    ecommerceLink: 'https://schuster-store.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/schuster.png',
    ecommerceCategory: 'fashion'
  },
  {
    id: 236,
    ecommerceName: 'Scout',
    ecommerceLink: 'https://www.scout.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/scout.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 237,
    ecommerceName: 'Seavus',
    ecommerceLink: 'https://www.sedc.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/seavus.png',
    ecommerceCategory: 'services / education'
  },
  {
    id: 238,
    ecommerceName: 'Семос',
    ecommerceLink: 'https://semosedu.com.mk/Home_page.aspx',
    ecommerceLogo: '/assets/images/stores/stores-book/semos.png',
    ecommerceCategory: 'services / education'
  },
  {
    id: 239,
    ecommerceName: 'Сервер',
    ecommerceLink: 'https://server.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/server.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 240,
    ecommerceName: 'Setec',
    ecommerceLink: 'https://setec.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/setec.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 241,
    ecommerceName: 'Sharr express',
    ecommerceLink: 'https://www.sharrexpress.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/sharr-express.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 242,
    ecommerceName: 'Signori',
    ecommerceLink: 'https://signori.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/signori.png',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 243,
    ecommerceName: 'Skopje hotels',
    ecommerceLink: 'https://travel4macedonia.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/skopje-hotels.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 244,
    ecommerceName: 'Скопје рент',
    ecommerceLink: 'https://skopjerent.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/skopje-rent.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 245,
    ecommerceName: 'Slim line club',
    ecommerceLink: 'https://mk.slimlineclub.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/slim-line-club.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 246,
    ecommerceName: 'Службен весник',
    ecommerceLink: 'http://www.slvesnik.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sluzben-vesnik.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 247,
    ecommerceName: 'Smart living',
    ecommerceLink: 'https://smartliving.mk/mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/smartliving.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 248,
    ecommerceName: 'Smart race club',
    ecommerceLink: 'https://www.smartrace.club/apex/f?p=90100:1001:5305400525343::::P0_EVENT_ID,P0_EVENT_NAME,P0_SEX_ID,P0_SEX_ecommerceCATEGORY,P0_EVENT_HOME_PAGE:,,,,',
    ecommerceLogo: '/assets/images/stores/stores-book/smart-race-club.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 249,
    ecommerceName: 'Smart shop',
    ecommerceLink: 'https://smartshop.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/smart-shop.png',
    ecommerceCategory: 'technology / home '
  },
  {
    id: 250,
    ecommerceName: 'Шминка',
    ecommerceLink: 'https://www.sminka.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sminka.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 251,
    ecommerceName: 'Somnia shop',
    ecommerceLink: 'https://www.somniashop.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/somnia-shop.png',
    ecommerceCategory: 'home / '
  },
  {
    id: 252,
    ecommerceName: 'Sos детско село',
    ecommerceLink: 'https://sos.org.mk/en/',
    ecommerceLogo: '/assets/images/stores/stores-book/sos-detsko-selo.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 253,
    ecommerceName: 'Sport M',
    ecommerceLink: 'https://www.sport-m.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sportm.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 254,
    ecommerceName: 'Sport reality',
    ecommerceLink: 'https://www.sportreality.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sportreality.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 255,
    ecommerceName: ' Sport vision',
    ecommerceLink: 'https://www.sportvision.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sport-vision.png',
    ecommerceCategory: 'sport / fashion'
  },
  {
    id: 256,
    ecommerceName: 'Среќа',
    ecommerceLink: 'https://srekja.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sreka.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 257,
    ecommerceName: 'Story box',
    ecommerceLink: 'https://storybox.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/story-box.png',
    ecommerceCategory: 'kids'
  },
  {
    id: 258,
    ecommerceName: 'Sunwireless',
    ecommerceLink: 'https://svetotnabibi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/sunwireless.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 259,
    ecommerceName: 'Светот на Биби',
    ecommerceLink: 'https://svetotnabibi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/svetot-na-bibi.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 260,
    ecommerceName: 'Swanson',
    ecommerceLink: 'http://swanson.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/swanson.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 261,
    ecommerceName: 'Тања 2000',
    ecommerceLink: 'https://www.tanja2000.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tanja-2000.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 262,
    ecommerceName: 'Техномаркет',
    ecommerceLink: 'https://www.tehnomarket.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tehnomarket.png',
    ecommerceCategory: 'technology / home'
  },
  {
    id: 263,
    ecommerceName: 'Технополис',
    ecommerceLink: 'https://tehnopolis.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tehnopolis.png',
    ecommerceCategory: 'home'
  },
  {
    id: 264,
    ecommerceName: 'Телеком',
    ecommerceLink: 'https://www.telekom.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/telekom.png',
    ecommerceCategory: 'services / technology / mobile phones'
  },
  {
    id: 265,
    ecommerceName: 'Теле шоп',
    ecommerceLink: 'https://teleshop.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tele-shop.png',
    ecommerceCategory: 'home / beauty / health'
  },
  {
    id: 266,
    ecommerceName: 'Темпомак',
    ecommerceLink: 'http://www.tempomak.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tempomak.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 267,
    ecommerceName: 'Терма лифт',
    ecommerceLink: 'https://www.termalift.com.mk/mk',
    ecommerceLogo: '/assets/images/stores/stores-book/termalift.png',
    ecommerceCategory: 'other /'
  },
  {
    id: 268,
    ecommerceName: 'Термо систем',
    ecommerceLink: 'https://www.termosistem.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/termo-sistem.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 269,
    ecommerceName: 'Tilla',
    ecommerceLink: 'http://www.tilla.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tilla.png',
    ecommerceCategory: 'fashion / '
  },
  {
    id: 270,
    ecommerceName: 'Tim computers',
    ecommerceLink: 'http://timcomputers.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tim-computers.png',
    ecommerceCategory: 'technology /'
  },
  {
    id: 271,
    ecommerceName: 'Топшоп',
    ecommerceLink: 'https://www.topshop.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/topshop.png',
    ecommerceCategory: 'home / technology '
  },
  {
    id: 272,
    ecommerceName: 'Торти',
    ecommerceLink: 'https://torti.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/torti.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 273,
    ecommerceName: 'Тримакс',
    ecommerceLink: 'http://www.trimaks.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tri-maks.png',
    ecommerceCategory: 'services / education / office'
  },
  {
    id: 274,
    ecommerceName: 'Тритекс',
    ecommerceLink: 'https://www.triteks.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/tritex.png',
    ecommerceCategory: 'fashion /'
  },
  {
    id: 275,
    ecommerceName: 'Uhost',
    ecommerceLink: 'https://uhost.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/uhost.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 276,
    ecommerceName: 'Ukion',
    ecommerceLink: 'https://www.ukion.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/ukion.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 277,
    ecommerceName: 'Универзитет Гоце Делчев',
    ecommerceLink: 'https://www.ugd.edu.mk/index.php',
    ecommerceLogo: '/assets/images/stores/stores-book/univerzitet-goce-delcev.png',
    ecommerceCategory: 'services / education '
  },
  {
    id: 278,
    ecommerceName: 'Услуги',
    ecommerceLink: 'https://uslugi.gov.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/uslugi.png',
    ecommerceCategory: 'services / '
  },
  {
    id: 279,
    ecommerceName: 'Велјан',
    ecommerceLink: 'http://vel-jan.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/veljan.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 280,
    ecommerceName: 'Велосипед',
    ecommerceLink: 'https://velosiped.mk/?gclid=CjwKCAjw_sn8BRBrEiwAnUGJDuFwfQdTcmgFS-rXhoO-xJ5SUMExUKUAD8Ysr2qEO0SnbwmQOvrSixoCN28QAvD_BwE',
    ecommerceLogo: '/assets/images/stores/stores-book/velosiped.png',
    ecommerceCategory: 'sport / bikes '
  },
  {
    id: 281,
    ecommerceName: 'View in Hotel',
    ecommerceLink: 'http://viewinn.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/view-in.png',
    ecommerceCategory: 'services / travel / hotel'
  },
  {
    id: 282,
    ecommerceName: 'Винотека',
    ecommerceLink: 'https://www.vinoteka.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/vinoteka.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 283,
    ecommerceName: 'Visit Ohrid',
    ecommerceLink: 'https://visit-ohrid.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/visit-ohrid.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 284,
    ecommerceName: 'Виста турс',
    ecommerceLink: 'http://www.vistaturs.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/vista-turs.png',
    ecommerceCategory: 'services / travel'
  },
  {
    id: 285,
    ecommerceName: 'Виталиа',
    ecommerceLink: 'https://www.vitalia.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/vitalia.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 286,
    ecommerceName: 'Водовод Скопје',
    ecommerceLink: 'https://vodovod-skopje.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/vodovod-skopje.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 287,
    ecommerceName: 'Vox net',
    ecommerceLink: 'http://www.voxnet.com.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/vox-net.png',
    ecommerceCategory: 'services /'
  },
  {
    id: 288,
    ecommerceName: 'V-tac',
    ecommerceLink: 'http://v-tac.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/v-tac.png',
    ecommerceCategory: 'home / lights'
  },
  {
    id: 289,
    ecommerceName: 'Warp sparkles',
    ecommerceLink: 'https://www.warpsparkles.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/warp-sparkles.png',
    ecommerceCategory: 'services / education '
  },
  {
    id: 290,
    ecommerceName: 'Watch club',
    ecommerceLink: 'https://watchclub.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/watch-club.png',
    ecommerceCategory: 'fashion / wathces / accessories'
  },
  {
    id: 291,
    ecommerceName: 'Wenice',
    ecommerceLink: 'https://wenice.mk/index.php',
    ecommerceLogo: '/assets/images/stores/stores-book/wenice.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 292,
    ecommerceName: 'Wine',
    ecommerceLink: 'https://wine.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/wine.png',
    ecommerceCategory: 'services / food'
  },
  {
    id: 293,
    ecommerceName: 'Winix',
    ecommerceLink: 'https://www.winixmk.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/winix.png',
    ecommerceCategory: 'home /'
  },
  {
    id: 294,
    ecommerceName: 'Winner - Vienna Insurance Group',
    ecommerceLink: 'http://www.winner.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/winner.png',
    ecommerceCategory: 'services / insurance policy'
  },
  {
    id: 295,
    ecommerceName: 'Wow',
    ecommerceLink: 'http://wow.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/wow.png',
    ecommerceCategory: 'fashion / accessories'
  },
  {
    id: 296,
    ecommerceName: 'Zazu',
    ecommerceLink: 'https://zazu.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/zazu.png',
    ecommerceCategory: 'fashion / kids'
  },
  {
    id: 297,
    ecommerceName: 'Земи',
    ecommerceLink: 'https://zemi.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/zemi.png',
    ecommerceCategory: 'services / hosting'
  },
  {
    id: 298,
    ecommerceName: 'Ziaja',
    ecommerceLink: 'http://www.e-ziaja.ukionshops.com/',
    ecommerceLogo: '/assets/images/stores/stores-book/ziaja.png',
    ecommerceCategory: 'beauty / health'
  },
  {
    id: 299,
    ecommerceName: 'Златен заб',
    ecommerceLink: 'https://zlatenzab.mk/en/home-en/',
    ecommerceLogo: '/assets/images/stores/stores-book/zlaten-zab.png',
    ecommerceCategory: 'services / events'
  },
  {
    id: 300,
    ecommerceName: 'Златна книга',
    ecommerceLink: 'https://zk.mk/',
    ecommerceLogo: '/assets/images/stores/stores-book/zlatna-kniga.png',
    ecommerceCategory: 'services /'
  }
];

export { allEcommerces };
