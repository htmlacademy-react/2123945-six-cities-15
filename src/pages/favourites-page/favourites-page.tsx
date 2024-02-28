import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FavouriteCard from '../../components/favourite-card/favourite-card';
import { CardItemProps } from '../../shared-types';

function FavouritesPage({card}: CardItemProps): JSX.Element {
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
                    title={title}
                    type={type}
                    price={price}
                    isPremium={isPremium}
                    previewImage={previewImage}
                  />

                  <FavouriteCard
                    title={title}
                    type={type}
                    price={price}
                    isPremium={isPremium}
                    previewImage={previewImage}
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
                    title={title}
                    type={type}
                    price={price}
                    isPremium={isPremium}
                    previewImage={previewImage}
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
