import { CITIES } from '../../const';
import CityItem from '../city-item/city-item';

function CitiesList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <CityItem city={city} key={city}/>)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
