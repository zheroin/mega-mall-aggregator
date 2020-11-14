import { Stores } from 'lib/enums';

export const findStoreLogo = (storeId: number) => {
  return `/src/assets/images/stores/${Stores[storeId].toLocaleLowerCase()}.svg`;
};
