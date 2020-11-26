import styled from 'styled-components';
import { Grid, Box, Link } from '@material-ui/core';

const StyledGrid = styled(Grid)`
  transition: 0.3s;
  min-height: 120px;
  @media (max-width: 768px) {
    min-height: 100px;
  }

  &:hover {
    div {
      text-decoration: underline;
    }
  }
`;

const StyledLink = styled(Link)`
  max-width: 160px;
  width: 100%;
  margin-top: 40px;
`;

const StyledLogo = styled.img`
  max-width: 120px;
  width: 100%;
  max-height: 40px;
  box-shadow: 0px 0px 15px #d3d3d3;
  margin: 0 auto;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    float: right;
  }
`;

const StyledStoreLink = styled(Box)`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 12px;
  transition: 0.3s;
  display: block;
  margin-top: 2%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 11px;
    clear: both;
    width: 50%;
    float: right;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

const MobileStyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 80px;
  height: 80px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -24px;
`;
export { StyledGrid, StyledLink, StyledLogo, StyledStoreLink, MobileStyledPriceBox };
