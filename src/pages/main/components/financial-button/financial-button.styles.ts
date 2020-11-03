import styled from 'styled-components';

import { Box, Button, Grid, Typography } from '@material-ui/core';

const StyledDiv = styled.div`
  height: 180px;
  width: 350px;
  background-color: #fdbc00;
  position: fixed;
  top: 55%;
  right: 0;
  transition: ease-in-out 0.3s;
  border-radius: 10px 0 0 10px;
  transform: translateX(290px);
  z-index: 1;
  &:hover {
    transform: translateX(50px);
  }

  @media (max-width: 768px) {
    height: 150px;
    width: 250px;
    transform: translateX(190px);
  }
`;

const StyledButton = styled(Button)`
  background-color: #fdbc00;
  width: 100%;
  height: 100%;
  max-height: 180px;
  max-width: 47px;
  &:hover {
    background-color: #fdbc00;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  transform: rotate(-90deg);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export { StyledButton, StyledDiv, StyledTypography };
