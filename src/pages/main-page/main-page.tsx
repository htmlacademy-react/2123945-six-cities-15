import OptionsList from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import SortingHeader from '../../components/sorting-header/sorting-header';
import { Helmet } from 'react-helmet-async';
import LocationsList from '../../components/cities-list/cities-list';
import { OfferPreview } from '../../shared-types';
import { useState } from 'react';

export type MainPageScreenProps = {
  offerCount: number;
  cards: OfferPreview[];
};

function MainPage({ offerCount, cards }: MainPageScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferPreview | null>();
  const handleSelectActiveCard = (card?: OfferPreview) => {
    setActiveCard(card);
  };

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationsList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <SortingHeader offerCount={offerCount} />
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <OptionsList />
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <CardsList
                    cards={cards}
                    onMouseHover={handleSelectActiveCard}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map cards={cards} activeCard={activeCard} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
