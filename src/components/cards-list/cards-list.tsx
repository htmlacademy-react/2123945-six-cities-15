import { Cards } from '../../mock-data/mock-data';
import CardItem from '../card/card';

function CardsList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => <CardItem card={card} key={card.id}/>)}
    </div>
  );
}


export default CardsList;
