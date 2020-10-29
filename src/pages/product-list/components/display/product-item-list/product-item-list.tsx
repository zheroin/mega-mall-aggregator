import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, Typography, Box, Grid, FormControl, Hidden } from '@material-ui/core';
import { displayData } from './product-item-list.data';
import { StyledButton as ShowMoreButton, StyledHeaderBox } from './product-item-list.styles';
import { StyledPagination, StyledBox } from '../display.styles';
import { ProductItem } from './../product-item';
import { generatePath, withRouter } from 'react-router';
import { ROUTES } from '../../../../../consts';

import { StyledSelect } from './../components/display-header/components/desktop-filter/desktop-filter.styles';
import { ListTypes, OrderTypes } from 'lib/enums';
import { getTextForOrderType } from './../components/display-header/components/desktop-filter/desktop-filter.utils';
import { translate } from 'lib/translate';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { connect } from 'react-redux';
import { getLatestProducts } from 'store/main-store';
import { PageOptions } from 'lib/models';
import { changePageOptions } from 'store/product-list-store';

interface ShopsListProps {
  isPaging: 'prodList' | 'detailList';
  data: Models.Product.Model[];
  onInit: () => void;

  options: PageOptions;
  onOptionsChange: (options: PageOptions) => void;
}

const ProductItemList = (props: ShopsListProps) => {
  //this is for the filter on the similar product list.
  const [orderType, setOrderType] = React.useState(OrderTypes.PriceAscending);

  //this is for the list post per page and page number
  const [posts, setPosts] = useState(displayData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    props.onInit();
  }, []);

  var pages = 0;
  if (posts.length % postPerPage == 0) {
    pages = posts.length / postPerPage;
  } else {
    pages = Math.floor(posts.length / postPerPage) + 1;
  }

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const showMorePosts = () => {
    setPostPerPage(postPerPage + 10);
  };

  //This is for the place where we are rendering this component if its a list with pagination or a list with show more
  const renderPagination = () => {
    const indexOfLastPost = currentPage * (postPerPage + 10);
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <>
        <StyledPagination count={pages} page={currentPage} onChange={paginate} />
      </>
    );
  };
  const renderShowMoreButton = () => {
    return (
      <>
        <ShowMoreButton variant="contained" color="secondary" onClick={showMorePosts}>
          <Typography variant="button">види повеќе</Typography>
        </ShowMoreButton>
      </>
    );
  };
  const changeOrderType = (event: React.ChangeEvent<{ value: string }>) => {
    setOrderType(+event.target.value);
    props.onOptionsChange({ ...props.options, order: +event.target.value });
  };

  return (
    <>
      <StyledHeaderBox>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4">{translate('MegaMall_SimilarProducts_Heading', 'Слични производи и останати продавници')}</Typography>
          </Grid>
          <Grid item>
            <Hidden mdDown>
              <FormControl>
                <StyledSelect
                  disableUnderline
                  value={orderType}
                  onChange={(event: React.ChangeEvent<{ value: string }>) => {
                    changeOrderType(event);
                  }}
                >
                  {Object.keys(OrderTypes)
                    .filter(key => !isNaN(Number(key)))
                    .map(value => {
                      return (
                        <option key={value} value={value}>
                          {getTextForOrderType(+value)}
                        </option>
                      );
                    })}
                </StyledSelect>
              </FormControl>
            </Hidden>
          </Grid>
        </Grid>
        {/* I suggest this to be created as a separate component because we are using it in 2 different components and the code is the same and everything and even the functionality
         * is the same, the proper way is to take it and create it a shared component and use it here and in desktop-filter
         */}
      </StyledHeaderBox>
      <Box>
        <List component={'ul'}>
          {props.data.map(val => (
            <ListItem key={val.id} button component={RouterLink} to={generatePath(ROUTES.PRODUCT, { id: val.id })} disableGutters={true} divider={true}>
              <StyledBox mt={1} mb={1}>
                <ProductItem key={val.id} title={val.name} price={val.price} discountPrice={val.discountPrice} logo={val.imageSource} link={val.link} />
              </StyledBox>
            </ListItem>
          ))}
        </List>
        {/* {props.isPaging === 'prodList' ? renderPagination() : renderShowMoreButton()} */}
      </Box>

      {/* TODO: we will leave only 10 similar for now later we will add the show more button */}
      {/* TODO: change component name or smth */}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: () => {
    dispatch(getLatestProducts());
  },
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.main.latestData,
    options: state.productList.options
  };
};
const ProductItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductItemList);

export default ProductItemListContainer;
