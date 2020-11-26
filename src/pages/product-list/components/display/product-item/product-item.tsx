import React, { useEffect, useState } from 'react';

import { Typography, Grid, Hidden, createStyles, makeStyles, Theme, Link } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledImage, StyledLogo, StyledGrid, StyledPriceBox, MobileStyledPriceBox, StyledTextBox, StyledLink, StyledStoreLink } from './product-item.styles';
import { translate } from 'lib/translate';
import { formatPrice } from 'utils/helpers/price-formatter';
import { Stores } from 'lib/enums';

export interface IProductItem {
  img?: string;
  link?: string;
  title: string;
  price: string;
  discountPrice?: string;
  description?: string;
  logo: number;
  storeLink?: string;
}

const ProductItem = (props: IProductItem) => {
  const findStoreLogo = (storeId: number) => {
    return `./../../../../../assets/images/stores/${Stores[storeId].toLocaleLowerCase()}.svg`;
  };
  return (
    <>
      <StyledGrid container spacing={2}>
        <Grid container item xs={12}>
          {/* Desktop product item */}
          <Hidden smDown>
            <Grid item xs={2}>
              <Box>
                <StyledImage src={props.img} />
              </Box>
            </Grid>
            <Grid container item xs={props.img ? 10 : 12}>
              <Grid item xs={12}>
                <Box fontFamily="RobotoBold" fontSize="18px" color="#000000" ml={1}>
                  {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                </Box>
              </Grid>
              <Grid item xs={!!props.discountPrice ? 2 : 6}>
                {!!props.discountPrice && <StyledPriceBox />}
                <Box fontFamily="OswaldMedium" fontSize="24px" color="#000000" ml={1} mt={5}>
                  {formatPrice(props.price) + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                </Box>
              </Grid>
              {!!props.discountPrice && (
                <Grid item xs={2}>
                  <Box fontFamily="OswaldMedium" fontSize="24px" color="#000000" ml={1} mt={5}>
                    {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                  </Box>
                </Grid>
              )}
              <Grid container item xs={!!props.discountPrice ? 8 : 6} alignItems="center" alignContent="flex-end" direction="column">
                <StyledLink href={props.storeLink} target="_blank">
                  <StyledLogo src={findStoreLogo(props.logo)} />
                  <StyledStoreLink>{translate('MegaMall_GoTo_Store', 'Види продавница')}</StyledStoreLink>
                </StyledLink>
              </Grid>
            </Grid>
            {/* End desktop product item */}
          </Hidden>
          <Hidden mdUp>
            {/* Mobile product item */}
            <Grid item xs={3}>
              <Box>
                <StyledImage src={props.img} />
              </Box>
            </Grid>
            <Grid container item xs={props.img ? 9 : 12}>
              <Grid item xs={12}>
                <Box fontFamily="RobotoRegular" fontSize="14px" color="#000000">
                  {props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}
                </Box>
              </Grid>
              <Grid container spacing={!!props.discountPrice ? 1 : 0}>
                <Hidden smUp>
                  <Grid item xs={!!props.discountPrice ? 4 : 6}>
                    {!!props.discountPrice && <MobileStyledPriceBox />}
                    <Box fontFamily="OswaldRegular" fontSize="16px" color="#000000">
                      {props.price ? props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД') : '0' + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                    </Box>
                  </Grid>
                </Hidden>
                {/*START TABLET */}
                <Hidden only="xs">
                  <Grid item xs={4}>
                    {!!props.discountPrice && <MobileStyledPriceBox />}
                    <Box fontFamily="OswaldRegular" fontSize="16px" color="#000000">
                      {props.price ? props.price + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД') : '0' + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                    </Box>
                  </Grid>
                </Hidden>
                {/* END TABLET */}
                {!!props.discountPrice && (
                  <Grid item xs={4}>
                    <Box fontFamily="OswaldRegular" fontSize="16px" color="#000000">
                      {props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}
                    </Box>
                  </Grid>
                )}
                <Hidden mdUp>{!props.discountPrice && <Grid item xs={2} sm={4} />}</Hidden>
                <Grid item xs={4}>
                  <StyledLink href={props.storeLink} target="_blank">
                    <StyledLogo src={findStoreLogo(props.logo)} />
                    <StyledStoreLink>{translate('MegaMall_GoTo_Store', 'Види продавница')}</StyledStoreLink>
                  </StyledLink>
                </Grid>
              </Grid>
            </Grid>

            {/* End mobile product item */}
          </Hidden>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default ProductItem;
