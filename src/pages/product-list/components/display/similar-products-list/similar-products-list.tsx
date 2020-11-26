import React, { useEffect } from 'react';
import { List, ListItem, Typography, Box, Grid } from '@material-ui/core';
import { StyledHeaderBox, StyledLink } from './similar-products-list.styles';
import { StyledBox } from '../display.styles';
import { generatePath } from 'react-router';
import { ROUTES } from '../../../../../consts';

import { translate } from 'lib/translate';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { getLatestProducts } from 'store/main-store';
import { PageOptions } from 'lib/models';
import { changePageOptions } from 'store/product-list-store';
import DetailedProductItem from 'pages/detailed-view/components/detailed-view/detailed-product-item/detailed-product-item';
import { Stores } from 'lib/enums';

interface ShopsListProps {
  isPaging: 'prodList' | 'detailList';
  data: Models.Product.Model[];
  onInit: () => void;

  options: PageOptions;
  onOptionsChange: (options: PageOptions) => void;
}

const ProductItemList = (props: ShopsListProps) => {
  useEffect(() => {
    props.onInit();
  }, []);

  const findStoreLogo = (storeId: number) => {
    return `./../../../../../assets/images/stores/${Stores[storeId].toLocaleLowerCase()}.svg`;
  };

  return (
    <>
      <StyledHeaderBox>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4">{translate('MegaMall_SimilarProducts_Heading', 'Слични производи и останати продавници')}</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </StyledHeaderBox>
      <Box>
        <List component={'ul'}>
          {props.data.map(val => (
            <StyledLink key={val.id} href={generatePath(ROUTES.PRODUCT, { id: val.id })}>
              <ListItem key={val.id} button disableGutters={true} divider={true}>
                <StyledBox mt={1} mb={1}>
                  <DetailedProductItem key={val.id} title={val.name} price={val.price} discountPrice={val.promotionPrice} logo={findStoreLogo(val.store)} link={val.link} storeLink={val.storeLink} />
                </StyledBox>
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getLatestProducts());
  },
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.main.latestData,
    options: state.productList.options
  };
};
const ProductItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductItemList);

export default ProductItemListContainer;
