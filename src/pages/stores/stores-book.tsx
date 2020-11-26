import React, { useEffect, useState } from 'react';
import { allEcommerces } from './registered-ecommerces';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { StyledContainer } from './stores-book.styles';
import { BreadCrumbs } from 'components/breadcrumbs';
import ECommerceCard from './components/ecommerce-card/ecommerce-card';
import { translate } from 'lib/translate';
import { BreadCrumb } from 'lib/models';
import { ROUTES } from 'consts';

const StoresBook = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([]);

  useEffect(() => {
    const breadCrumbs: BreadCrumb[] = [
      {
        key: ROUTES.MAIN,
        value: translate('MegaMall_Breadcrumbs_Home', 'Почетна')
      },
      {
        key: ROUTES.STORES,
        value: translate('MegaMall_Breadcrumbs_Stores', 'Продавници')
      }
    ];

    setBreadCrumbs(breadCrumbs);
  }, []);
  return (
    <Box mt={3} mb={3}>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <StyledContainer>
        <Typography variant="h6">
          <Box fontSize="24px" fontFamily="RobotoMedium" mt={3} mb={3}>
            {translate('MegaMall_Available_Stores', 'Достапни е-комерции')}
          </Box>
        </Typography>

        <Grid container spacing={5}>
          {allEcommerces.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={6} lg={2} xl={2}>
              <ECommerceCard storeTitle={item.ecommerceName} storeLogoPath={item.ecommerceLogo} storeLink={item.ecommerceLink} />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default StoresBook;
