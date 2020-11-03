import React from 'react';
import { translate } from 'lib/translate';
import { StyledButton, StyledDiv, StyledTypography } from './financial-button.styles';

const FinancialButton = () => {
  return (
    <StyledDiv>
      <StyledButton>
        <StyledTypography>{translate('MegaMall_Financial_Button', 'Финансиско друштво')}</StyledTypography>
      </StyledButton>
    </StyledDiv>
  );
};

export default FinancialButton;
