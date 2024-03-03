import Footer from '../../components/footer/footer';
import FavouriteCard from '../../components/favourite-card/favourite-card';
import { CardsItemProps } from '../../shared-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { cards } from '../../mock-data/mock-data';

function FavouritesPage({ card }: CardsItemProps): JSX.Element {
  const { id, title, type, price, isPremium, previewImage } = card;
  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="#">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>

                <div className="favorites__places">
                  {cards.map((card) => (
                    <FavouriteCard
                      key={id}
                      title={title}
                      type={type}
                      price={price}
                      isPremium={isPremium}
                      previewImage={previewImage}
                    />))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="#">
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {cards.map((card) => (
                    <FavouriteCard
                      key={id}
                      title={title}
                      type={type}
                      price={price}
                      isPremium={isPremium}
                      previewImage={previewImage}
                    />))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FavouritesPage;
