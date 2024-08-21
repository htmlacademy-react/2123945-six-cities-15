import { OfferPreview } from '../../shared-types';
import FavouriteCard from '../favourite-card/favourite-card';

type FavouriteCardsListProps = {
  offers: OfferPreview[];
  onMouseHover?: (arg?: OfferPreview) => void;
};

function FavouriteCardsList({
  offers,
  onMouseHover,
}: FavouriteCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <FavouriteCard
          offer={offer}
          key={offer.id}
          className="favorites__card"
          onMouseHover={onMouseHover}
        />
      ))}
    </div>
  );
}

export default FavouriteCardsList;
