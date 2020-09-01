import { Typography, ExpansionPanelDetails, Button, Box, Grid, ExpansionPanel } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  margin: 0 auto;
  max-height: 40px;
  p {
    font-family: 'RobotoRegular', sans-serif;
    font-size: 14px;
  }
`;
const StyledGrid = styled(Grid)`
  margin: 0 auto;
`;
const StyledButton = styled(Button)`
  width: inherit;
  background-color: #193364;
  color: white;
`;

const StyledItemButton = styled(Button)`
  p {
    font-family: 'RobotoRegular', sans-serif;
    font-size: 14px;
    text-transform: initial;
  }
`;
const StyledExpansionPanel = styled(ExpansionPanel)`
  box-shadow: none;
  border: 1px solid #0d1440;

  .MuiExpansionPanelSummary-root {
    min-height: 40px;
  }
`;
const StyledDetails = styled(ExpansionPanelDetails)`
  background-color: #ecedf0;
`;

export { StyledBox, StyledDetails, StyledGrid, StyledButton, StyledExpansionPanel, StyledItemButton };
