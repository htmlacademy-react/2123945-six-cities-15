import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { CityItemProps } from '../../shared-types';

function CityItem({ city }: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

function CitiesList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <CityItem city={city} key={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
