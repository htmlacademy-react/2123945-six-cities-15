import { GALLERY_IMAGES, INSIDE_OFFERS } from '../../const';
import { REVIEWS } from '../../mock-data/reviews';
import Gallery from '../../components/gallery/gallery';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import ReviewsList from '../../components/review-list/review-list';
import { Helmet } from 'react-helmet-async';
import ReviewsForm from '../../components/review-form/review-form';
import { OfferFull, OfferPreview } from '../../shared-types';
import { cards } from '../../mock-data/card-data';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { offers } from '../../mock-data/offers';
import Page404 from '../page-404/page-404';

type OfferPageProps = {
  offer: OfferFull;
};

function OfferPage({ offer }: OfferPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferPreview | null>();
  const handleSelectActiveCard = (card?: OfferPreview) => {
    setActiveCard(card || null);
  };

  const { id } = useParams();
  const offerInfo = offers.find((item: OfferPreview) => item.id === id);

  if (typeof offerInfo === 'undefined') {
    return <Page404 />;
  }

  const {
    title,
    type,
    price,
    isPremium,
    rating,
    bedrooms,
    maxAdults,
    description,
    host,
  } = offer;

  return (
    <>
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={GALLERY_IMAGES} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: `${rating && rating * 20}%`,
                    }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList insideOffers={INSIDE_OFFERS} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {host && (
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{host.name}</span>
                    {host.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                )}
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{REVIEWS.length}</span>
                </h2>
                <ReviewsList reviews={REVIEWS} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map cards={cards} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList cards={cards} onMouseHover={handleSelectActiveCard} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;
