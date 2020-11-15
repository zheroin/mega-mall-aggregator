import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { translate } from 'lib/translate';
import { StyledDiv, StyledBox, StyledSvg } from './empty-state.styles';

const _EmptyState = () => {
  const svgLogo = () => {
    return (
      <StyledSvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 50" fill="#355c7c">
        <path className="cls-1" d="M1.83,24.32V47.84a33.67,33.67,0,0,0,4.41.3,33.67,33.67,0,0,0,4.41-.3V40c-.2-.21-.42-.41-.62-.63A33.1,33.1,0,0,1,1.83,24.32Z" />
        <path className="cls-1" d="M60,39.86v8a32.64,32.64,0,0,0,8.83,0V24a33.22,33.22,0,0,1-8.2,15.26C60.37,39.45,60.16,39.65,60,39.86Z" />
        <path className="cls-1" d="M67,25.28c-.34,1-.72,1.94-1.14,2.87C66.24,27.22,66.62,26.26,67,25.28Z" />
        <path className="cls-1" d="M9.73,36.07a33.84,33.84,0,0,1-3.25-4.52A33.84,33.84,0,0,0,9.73,36.07Z" />
        <path className="cls-1" d="M65.82,28.15c-.43.93-.89,1.84-1.39,2.73C64.93,30,65.39,29.08,65.82,28.15Z" />
        <path className="cls-1" d="M68.43,19.2a31.89,31.89,0,0,1-1,4.6A31.89,31.89,0,0,0,68.43,19.2Z" />
        <path
          className="cls-1"
          d="M68.78,14.38V2.16c-.79-.1-3.74-.3-4.41-.3a33.94,33.94,0,0,0-4.42.3V17.24a24.86,24.86,0,0,1-49.3.7V2.16a33.67,33.67,0,0,0-4.41-.3,33.67,33.67,0,0,0-4.41.3v.1h0S1.74,13.6,1.74,14.38s0,1.55.09,2.32A33.32,33.32,0,0,0,6.48,31.55a66.72,66.72,0,0,0,4.17,5.56A33.46,33.46,0,0,0,60,37a33.9,33.9,0,0,0,4.48-6.14c.5-.89,2.19-4.62,2.53-5.6.17-.49,1.25-4.51,1.47-6.08a33.35,33.35,0,0,0,.35-4.82Z"
        />
      </StyledSvg>
    );
  };

  return (
    <>
      <StyledBox>
        <StyledDiv>
          {svgLogo()}
          <p>
            <Typography>{translate('MegaMall_NoResults_State', 'Нема податоци за избраната категорија.')}</Typography>
          </p>
        </StyledDiv>
      </StyledBox>
    </>
  );
};

export default _EmptyState;
