import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from '../../../..';
import ApplicationState from '../../../../store/application-state';
import * as SharedStore from '../../../../store/shared-store';

import { StyledTextField, StyledSearchIcon } from './search-bar.styles';
import { InputAdornment, IconButton } from '@material-ui/core';
import { translate } from 'lib/translate';

interface IProps {
  searchText: string;

  onSearchTextChange: (text: string) => void;
}

const SearchBar = (props: IProps) => {
  return (
    <>
      <StyledTextField
        fullWidth
        type="text"
        placeholder={translate('MegaMall_Searchbar_Search', 'Пребарај')}
        size="medium"
        margin="none"
        // value={props.searchText}
        onKeyDown={(event: any) => {
          if (event.keyCode == 13) {
            props.onSearchTextChange(event.target.value as string);
          }
        }}
        inputProps={{
          style: {
            paddingLeft: 10
          }
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <StyledSearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      ></StyledTextField>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSearchTextChange: (text: string) => {
    dispatch(SharedStore.onSearch(text));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    searchText: state.shared.searchText
  };
};

const SearchBarContainer = connect(() => mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
