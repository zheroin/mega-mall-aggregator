import React, { useEffect } from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import Card from './../../../../components/card/card';
import { AppDispatch } from 'index';
import { getLatestProducts } from 'store/main-store';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { translate } from 'lib/translate';
import { formatPrice } from 'utils/helpers/price-formatter';
import { displayData } from 'pages/product-list/components/display/similar-products-list/product-item-list.data';

interface IProps {
  data: Models.Product.Model[];
  onInit: () => void;
}

const ProductGrid = (props: IProps) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <>
      {props.data && props.data.length ? (
        <>
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5">Најнови производи</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3} pb={3}>
            <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
              {props.data.map((res, index) =>
                index < 8 ? (
                  <Grid item key={res.id} xs={12} md={3}>
                    <Link href={res.link} target="_blank">
                      <Card key={res.id} title={res.name.substring(0, 30)} imageSrc={res.imageSource || displayData[2].imageSource} size="small">
                        <Box component="span">{res.price === '' ? '0 ' + translate('MegaMall_Product_Price_Currency', 'МКД') : formatPrice(res.price) + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}</Box>
                      </Card>
                    </Link>
                  </Grid>
                ) : (
                  []
                )
              )}
            </Grid>
          </Box>
        </>
      ) : (
        <>Loading data...</>
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getLatestProducts());
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.main.latestData
  };
};

const LatestProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
export default LatestProductContainer;
