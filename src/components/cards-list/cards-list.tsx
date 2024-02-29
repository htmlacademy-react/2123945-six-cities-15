import { cards } from '../../mock-data/mock-data';
import CardItem from '../card-item/card-item';

function CardsList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <CardItem card={card.city.name} key={card.id} />
      ))}
    </div>
  );
}

export default CardsList;
