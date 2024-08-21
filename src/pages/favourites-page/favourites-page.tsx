import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../shared-types';
import FavouriteCardsList from '../../components/favourite-cards-list/favourite-cards-list';
import { useState } from 'react';

type FavoritesScreenProps = {
  offers: OfferPreview[];
};

const groupedByCityOffers = (offers: OfferPreview[]) => {
  const groupedOffers = offers.reduce(
    (acc: { [key: string]: OfferPreview[] }, offer) => {
      const cityName = offer.city.name;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer);
      return acc;
    },
    {}
  );
  return groupedOffers;
};

function FavouritesPage({ offers }: FavoritesScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferPreview | null>();
  const handleSelectActiveCard = (card?: OfferPreview) => {
    setActiveCard(card || null);
  };
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  const groupedFavoriteOffers = groupedByCityOffers(favoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(groupedFavoriteOffers).map(
              ([cityName, cityOffers]) => (
                <li key={cityName} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <span className="locations__item-link">{cityName}</span>
                    </div>
                  </div>
                  <FavouriteCardsList
                    offers={cityOffers}
                    onMouseHover={handleSelectActiveCard}
                  />
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavouritesPage;
