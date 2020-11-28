import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AppDispatch } from 'index';
import ApplicationState from 'store/application-state';
import { bootstrapApp } from 'store/shared-store';

import { ROUTES } from './consts';
import { Box } from '@material-ui/core';
import LoadingScreen from 'react-loading-screen';
import _DetailedProductPage from 'pages/detailed-view/detailed-product';
import FinancialButton from 'pages/main/components/financial-button/financial-button';
import StoresBook from 'pages/stores/stores-book';
import { initGA, logPageView } from 'utils/helpers/analytics';

interface IApp {
  applicationBootstraped: boolean;

  bootstrapApp: () => void;
}

const _App: React.FC<IApp> = (props: IApp) => {
  useEffect(() => {
    props.bootstrapApp();
    initGA();
    logPageView();
  }, []);

  const Header = lazy(() => import('components/header'));
  const Footer = lazy(() => import('components/footer'));
  const MainPage = lazy(() => import('pages/main'));
  const CategoryPage = lazy(() => import('pages/category'));
  const ProductListPage = lazy(() => import('pages/product-list'));

  const renderLoader = () => {
    return (
      <LoadingScreen loading bgColor="#193364" spinnerColor="#FDBC00">
        <Box component="span">Default loading text to fix the children? error</Box>
      </LoadingScreen>
    );
  };

  return (
    <>
      {props.applicationBootstraped ? (
        <>
          <Suspense fallback={renderLoader()}>
            <Header />
            <FinancialButton />
            <Box height="100%" minHeight="100vh" display="flex" flexDirection="column">
              <Switch>
                <Route exact path={ROUTES.MAIN} component={MainPage} />
                <Route exact path={ROUTES.CATEGORY} component={CategoryPage} />
                <Route path={ROUTES.LIST} component={ProductListPage} />
                <Route path={ROUTES.PRODUCT} component={_DetailedProductPage} />
                <Route path={ROUTES.STORES} component={StoresBook} />
              </Switch>
            </Box>
            <Footer />
          </Suspense>
        </>
      ) : (
        renderLoader()
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  bootstrapApp: () => {
    dispatch(bootstrapApp());
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    applicationBootstraped: !state.ui.showInitialLoader
  };
};

const App = connect(() => mapStateToProps, mapDispatchToProps)(_App);

export default App;
