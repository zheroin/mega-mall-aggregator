import styled from 'styled-components';
import { Grid, Box, Link } from '@material-ui/core';

const StyledImage = styled.img`
  max-width: 217px;
  width: 100%;
  max-height: 190px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  max-height: 40px;
  max-width: 120px;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 0px 15px #d3d3d3;

  @media (max-width: 768px) {
    width: 100%;
    float: right;
  }
`;

const StyledStoreLink = styled(Box)`
  text-align: center;
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 12px;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

const StyledGrid = styled(Grid)`
  min-height: 190px;
  transition: 0.3s;

  @media (max-width: 768px) {
    min-height: 100px;
  }
  &:hover {
    div {
      text-decoration: underline;
    }
  }
`;

const StyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 146px;
  height: 138px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -10px;
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

const StyledTextBox = styled(Box)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  max-width: 160px;
  width: 100%;
  margin-top: 40px;
`;

export { StyledImage, StyledLogo, StyledGrid, StyledPriceBox, MobileStyledPriceBox, StyledTextBox, StyledLink, StyledStoreLink };
