import styled from 'styled-components';

import { Box, Grid, CardContent, Link } from '@material-ui/core';

const StyledImage = styled.img`
  min-width: 450px;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const StyledGridContainer = styled(Grid)`
  & container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;
const StyledStickyGridItem = styled(Grid)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100%;
  z-index: 4;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0 !important;
  }
`;
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    h4 {
      font-size: 21px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  max-width: 120px;
  width: 100%;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 0px 15px #d3d3d3;

  @media (max-width: 768px) {
    max-width: 100px;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  max-width: 160px;
  width: 100%;
`;

const StyledStoreLink = styled(Link)`
  color: #0d1440;
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 14px;
  transition: 0.3s;
  text-align: center;
  display: block;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
export { StyledImage, StyledGridContainer, StyledStickyGridItem, StyledCardContent, StyledBox, StyledLogo, StyledLink, StyledStoreLink };
