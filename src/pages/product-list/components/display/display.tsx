import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';

import { Box, ListItem, List, Grid, Divider } from '@material-ui/core';
import DisplayHeader from './components/display-header/display-header';

import { ProductItem } from './product-item';
import { generatePath, RouteComponentProps, withRouter } from 'react-router';
import { ROUTES } from 'consts';
import { StyledBox, StyledLink, StyledPagination } from './display.styles';
import { getProducts, changePageOptions } from 'store/product-list-store';
import { PageOptions } from 'lib/models';
import { displayData } from './product-item-list/product-item-list.data';
import { ListTypes } from 'lib/enums';
import { MenuItem } from 'lib/data';
import { _EmptyState } from 'components/empty-state';
import LoadingScreen from 'react-loading-screen';
import { findStoreLogo } from 'utils/helpers/find-store-logo';
import { shopsData } from './shops-list/shops-list.data';
import ECommerceCard from 'pages/stores/components/ecommerce-card/ecommerce-card';
import { allEcommerces } from 'pages/stores/registered-ecommerces';

interface IProps extends RouteComponentProps<{ type: string }> {
  data: Models.Product.Model[];
  count: number;
  options: PageOptions;
  subCategoryItem: MenuItem;
  loadingFlag: boolean;

  onInit: (filter: string) => void;
  onOptionsChange: (options: PageOptions) => void;
}

const Display = (props: IProps) => {
  const [listType, setListType] = useState(ListTypes.Products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [pages, setPages] = useState(0);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = shopsData.slice(indexOfFirstPost, indexOfLastPost);

  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    props.onInit(props.subCategoryItem.title);
  }, []);

  const listTypeChange = (type: ListTypes) => {
    setListType(type);
  };

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const calculatePages = () => {
    if (shopsData) {
      if (shopsData.length % postPerPage == 0) {
        setPages(shopsData.length / postPerPage);
      } else {
        setPages(Math.floor(shopsData.length / postPerPage) + 1);
      }
    }
  };

  const onPageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    props.onOptionsChange({ ...props.options, page: page - 1 });
  };

  useEffect(() => {
    calculatePages();
  }, []);

  useEffect(() => {
    setCurrentCategory(props.match.params.type);
  }, [props.match.params.type]);

  return (
    <>
      {props.data && props.data.length ? (
        <Box p={3}>
          <Box>
            <DisplayHeader title={props.subCategoryItem.title} page={props.options.page} count={props.count} onListTypeChange={listTypeChange} listType={listType} />
          </Box>
          <Box mt={2}>
            {listType === ListTypes.Products ? (
              <>
                <List component={'ul'}>
                  {props.data.map((product, index) => {
                    return (
                      <StyledLink key={product.id} href={generatePath(ROUTES.PRODUCT, { id: product.id })}>
                        {index === 0 && <Divider />}
                        <ListItem button disableGutters={true} divider={true}>
                          <StyledBox mt={1} mb={1}>
                            <ProductItem
                              key={product.id}
                              img={product.imageSource || displayData[1].imageSource}
                              title={product.name}
                              price={product.price === '' ? '0' : product.price}
                              discountPrice={product.promotionPrice}
                              description={''}
                              logo={findStoreLogo(product.store)}
                              link={product.link}
                              storeLink={product.storeLink}
                            />
                          </StyledBox>
                        </ListItem>
                      </StyledLink>
                    );
                  })}
                </List>
                <Box mt={2}>
                  <StyledPagination count={Math.ceil(props.count / 10)} page={props.options.page + 1} onChange={(_, value: number) => onPageChange(value)} />
                </Box>
              </>
            ) : (
              <>
                <Grid container spacing={1}>
                  {allEcommerces.map(store => {
                    if (store.ecommerceCategory.includes(currentCategory)) {
                      return (
                        <Grid item key={store.id} xs={12} sm={6} md={6} lg={2} xl={2}>
                          <ECommerceCard storeTitle={store.ecommerceName} storeLogoPath={store.ecommerceLogo} storeLink={store.ecommerceLink} />
                        </Grid>
                      );
                    }
                  })}
                </Grid>
                {/* Due to small number of stores, the pagination is not needed at this point */}
              </>
            )}
          </Box>
        </Box>
      ) : (
        <>
          {props.loadingFlag ? (
            <LoadingScreen loading bgColor="#193364" spinnerColor="#FDBC00">
              <Box component="span">Default loading text to fix the children? error</Box>
            </LoadingScreen>
          ) : (
            //TODO: this should be discussed and probably changed...
            <_EmptyState />
          )}
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onInit: (filter: string) => {
    dispatch(getProducts(filter));
  },
  onOptionsChange: (options: PageOptions) => {
    dispatch(changePageOptions(options));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    data: state.productList.data,
    count: state.productList.count,
    options: state.productList.options,
    loadingFlag: state.productList.loadingFlag
  };
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Display));

export default DisplayContainer;
