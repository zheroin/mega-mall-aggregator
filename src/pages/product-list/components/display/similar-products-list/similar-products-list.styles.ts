import styled from 'styled-components';

import { Button, Box, Link } from '@material-ui/core';

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: #193364;
  color: white;
`;
const StyledHeaderBox = styled(Box)`
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 2rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export { StyledButton, StyledHeaderBox, StyledLink };
