import { Box, CardContent, Typography } from '@material-ui/core';
import { render } from '@testing-library/react';
import React from 'react';
import { StyledCardMedia, StyledMaterialCard } from './ecommerce-card.styles';

interface IECommerceCard {
  storeTitle: string;
  storeLogoPath: string;
  storeLink: string;
}

const ECommerceCard = (props: IECommerceCard) => {
  return (
    <>
      <StyledMaterialCard raised onClick={() => (window.location.href = props.storeLink)}>
        <Box p={1}>
          <StyledCardMedia image={props.storeLogoPath} />
          <CardContent>
            <Box fontWeight="fontWeightBold" fontFamily="RobotoRegular" fontSize="16px" textAlign="center">
              <Typography variant="h6">{props.storeTitle}</Typography>
            </Box>
          </CardContent>
        </Box>
      </StyledMaterialCard>
    </>
  );
};

export default ECommerceCard;
