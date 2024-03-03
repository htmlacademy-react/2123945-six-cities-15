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

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>

            <Route
              index
              element={<MainPage offerCount={offerCount} />}
            />
            <Route
              path={AppRoute.OfferPage}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.FavouritesPage}
              element={
                <PrivateRoute
                  authorisationStatus={AuthorisationStatus.Auth}
                >
                  <FavouritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.LoginPage}
              element={<LoginPage />}
            />
            <Route
              path='*'
              element={<Page404 />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
