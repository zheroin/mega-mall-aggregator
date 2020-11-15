import styled from 'styled-components';
import { Box } from '@material-ui/core';

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  height: 150px;
  top: 50%;
  left: 50%;
  margin-left: -50px; /* margin is -0.5 * dimension */
  margin-top: -25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;
const StyledBox = styled(Box)`
  background-color: #fff;
  height: 100%;
  min-height: 100vh;
  color: #355c7c;
`;
const StyledSvg = styled.svg`
  width: 60px;
  margin: 0 10px 0 10px;
  height: 60px;
  display: inline-block;
`;

export { StyledDiv, StyledBox, StyledSvg };
