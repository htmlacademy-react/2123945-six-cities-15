import { OfferPreview } from '../../shared-types';
import CardItem from '../card-item/card-item';

type FavouriteCardsListProps = {
  cards: OfferPreview[];
  onMouseHover?: (arg?: OfferPreview) => void;
};

function CardsList({
  cards,
  onMouseHover,
}: FavouriteCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <CardItem card={card} key={card.id} onMouseHover={onMouseHover} />
      ))}
    </div>
  );
}

export default CardsList;
