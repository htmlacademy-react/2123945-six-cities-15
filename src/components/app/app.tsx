import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { MainPageScreenProps } from '../../shared-types';
import Layout from '../layout/layout';
import FavouritesPage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage offerCount={offerCount} />} />
          <Route path="offer" element={<OfferPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="login" element={<LoginPage />} />

          <div className="page page--gray page--main">
            <MainPage offerCount={offerCount} />
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
