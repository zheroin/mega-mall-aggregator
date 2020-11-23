import styled from 'styled-components';
import { Box } from '@material-ui/core';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledBox = styled(Box)`
  background-color: #fff;
  height: 100%;
  min-height: 100vh;
  color: #355c7c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSvg = styled.svg`
  width: 60px;
  margin: 0 10px 0 10px;
  height: 60px;
  ${props => props.theme.breakpoints.down('sm')} {
    width: 50px;
    height: 50px;
  }
`;

export { StyledDiv, StyledBox, StyledSvg };
