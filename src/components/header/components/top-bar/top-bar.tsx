import React from 'react';

import { Grid, Box, Link } from '@material-ui/core';
import { LanguagePickerContainer } from 'components/header/containers/language-picker';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { StyledTypography } from './top-bar.styles';
import { translate } from 'lib/translate';

const TopBar = () => {
  return (
    <>
      <Box>
        <Grid container justify="flex-end" alignItems="flex-end" spacing={2}>
          <Grid item>
            <Link href="/stores">
              <StyledTypography variant="subtitle2">{translate('MegaMall_Topbar_Shops', 'Продавници')}</StyledTypography>
            </Link>
          </Grid>
          <Grid item style={{ padding: 0 }}>
            <Link href="https://www.facebook.com" target="_blank">
              <FacebookIcon fontSize="small" htmlColor="#193364" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <InstagramIcon fontSize="small" htmlColor="#193364" />
            </Link>
          </Grid>
          <Grid item>
            <LanguagePickerContainer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
