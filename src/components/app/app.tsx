import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageScreenProps } from '../../shared-types';
import { AppRoute, AuthorisationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';
import { getAuthorisationStatus } from '../../utils';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

function App({ offerCount, cards }: MainPageScreenProps): JSX.Element {
  const authorisationStatus = getAuthorisationStatus();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout authorisationStatus={AuthorisationStatus} />}
          >
            <Route
              index
              element={<MainPage offerCount={offerCount} cards={cards} />}
            />
            <Route path={AppRoute.OfferPage} element={<OfferPage />} />
            <Route
              path={AppRoute.FavouritesPage}
              element={
                <PrivateRoute authorisationStatus={authorisationStatus}>
                  <FavouritesPage />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoute.LoginPage}
              element={
                <PrivateRoute
                  authorisationStatus={authorisationStatus}
                  isReverse
                >
                  <FavouritesPage />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoute.LoginPage}
              element={
                <PrivateRoute
                  authorisationStatus={authorisationStatus}
                  isReverse
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
