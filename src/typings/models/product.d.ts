declare module Models.Product {
  export interface Model {
    id: string;
    link: string;
    name: string;
    price: string;
    promotionPrice?: string;
    imageSource: string;
    store: number;
    storeLink: string;
  }
}
