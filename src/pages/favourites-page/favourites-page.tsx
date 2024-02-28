import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FavouriteCard from '../../components/favourite-card/favourite-card';
import { cards } from '../../mock-data/mock-data';

type FavouritesPageProps = {
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  isPremium: boolean;
  previewImage: string;
};

function FavouritesPage({card}: FavouritesPageProps): JSX.Element {
  const { title, type, price, isPremium, previewImage } = card;
  return (
    <>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>


            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavouriteCard
                    title={cards.title}
                    type={cards.type}
                    price={cards.price}
                    isPremium={cards.isPremium}
                    previewImage={cards.previewImage}
                  />

                  <FavouriteCard
                    title={cards.title}
                    type={cards.type}
                    price={cards.price}
                    isPremium={cards.isPremium}
                    previewImage={cards.previewImage}
                  />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavouriteCard
                    title={cards.title}
                    type={cards.type}
                    price={cards.price}
                    isPremium={cards.isPremium}
                    previewImage={cards.previewImage}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default FavouritesPage;
