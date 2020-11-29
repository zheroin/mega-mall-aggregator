import React from 'react';

import { Box, Grid, ExpansionPanelSummary, Typography, Divider, AccordionSummary } from '@material-ui/core';
import { StyledDetails, StyledBox, StyledExpansionPanel, StyledButton, StyledItemButton } from './mobile-filter.styles';
import { filterData, IFilterItem } from './mobile-filter.data';
import { translate } from 'lib/translate';

const MobileFilter = () => {
  const renderItem = (item: IFilterItem) => {
    return (
      <>
        <Box mt={1}>
          <Typography variant="h6">{item.header.title}</Typography>
        </Box>
        <Box mt={2} mb={2}>
          <Grid container spacing={2}>
            {item.links.map((val, index) => (
              <Grid item key={index}>
                <StyledItemButton key={val.title} variant="outlined">
                  <Typography variant="body1">{val.title}</Typography>
                </StyledItemButton>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
      </>
    );
  };

  return (
    <>
      {/* <Box>
        <StyledExpansionPanel>
          <AccordionSummary>
            <StyledBox>
              <Typography>{translate('MegaMall_MobileFilter_Filters', 'Филтри')}</Typography>
            </StyledBox>
          </AccordionSummary>
          <StyledDetails>
            <Grid container alignContent="space-between" spacing={2}>
              <Grid item>
                {filterData.map((val, index) => (
                  <Box key={index}>{renderItem(val)}</Box>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Box mt={1} mb={1}>
                  <StyledButton variant="contained" fullWidth>
                    {translate('MegaMall_MobileFilter_Filter', 'Филтрирај')}
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          </StyledDetails>
        </StyledExpansionPanel>
      </Box> */}
    </>
  );
};

export default MobileFilter;
