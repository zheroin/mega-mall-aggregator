import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import { translate } from 'lib/translate';
import { StyledPriceBox } from 'pages/product-list/components/display/product-item/product-item.styles';
import React from 'react';
import { formatPrice } from 'utils/helpers/price-formatter';
import { StyledLink } from '../detailed-product-view.styles';
import { MobileStyledPriceBox, StyledGrid, StyledLogo, StyledStoreLink } from './detailed-product-item.styles';

export interface IDetailedProductItem {
  link?: string;
  title: string;
  price: string;
  discountPrice?: string;
  description?: string;
  logo: string;
  storeLink?: string;
}

const DetailedProductItem = (props: IDetailedProductItem) => {
  return (
    <StyledGrid container spacing={2}>
      <Hidden smDown>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Box ml={1} color="#000">
              <Typography variant="h6">{props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}</Typography>
            </Box>
          </Grid>
          <Grid item xs={!!props.discountPrice ? 2 : 6}>
            {!!props.discountPrice && <StyledPriceBox />}
            <Box ml={1} mt={5} color="#000">
              <Typography variant="h4">{formatPrice(props.price) + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}</Typography>
            </Box>
          </Grid>
          {!!props.discountPrice && (
            <Grid item xs={2}>
              <Box ml={1} mt={5} color="#000">
                <Typography variant="h4">{props.discountPrice + ' ' + translate('MegaMall_Product_Price_Currency', 'МКД')}</Typography>
              </Box>
            </Grid>
          )}
          <Grid container item xs={!!props.discountPrice ? 8 : 6} alignItems="center" alignContent="flex-end" direction="column">
            <StyledLink href={props.storeLink} target="_blank">
              <StyledLogo src={props.logo} />
              <StyledStoreLink>{translate('MegaMall_GoTo_Store', 'Види продавница')}</StyledStoreLink>
            </StyledLink>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        {/* Mobile product item */}
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Box fontFamily="RobotoRegular" fontSize="14px" color="#000000">
              <Typography variant="body2">{props.title.length > 100 ? props.title.substring(0, 100) + '...' : props.title}</Typography>
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
              <Grid item xs={2}>
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
            <Hidden mdUp>{!props.discountPrice && <Grid item xs={2} sm={6} />}</Hidden>
            <Hidden xsDown>{!!props.discountPrice && <Grid item xs={2} />}</Hidden>

            <Grid item xs={4}>
              <StyledLink href={props.storeLink} target="_blank">
                <StyledLogo src={props.logo} />
                <StyledStoreLink>{translate('MegaMall_GoTo_Store', 'Види продавница')}</StyledStoreLink>
              </StyledLink>
            </Grid>
          </Grid>
        </Grid>

        {/* End mobile product item */}
      </Hidden>
    </StyledGrid>
  );
};

export default DetailedProductItem;
