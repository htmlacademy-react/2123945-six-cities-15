import { Link } from 'react-router-dom';
import { CITIES, CitiesType } from '../../const';

type LocationListItemProps = {
  city: CitiesType;
  activeItemClass?: string;
};

export function LocationListItem({
  city,
  activeItemClass = 'tabs__item--active',
}: LocationListItemProps): JSX.Element {
  const { isActive, name } = city;
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${
          isActive ? activeItemClass : ''
        }`}
        to="#"
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

function LocationsList(): JSX.Element {
  const locationsListItems = CITIES.map((city) => (
    <LocationListItem key={city.name} city={city} />
  ));

  return <ul className="locations__list tabs__list">{locationsListItems}</ul>;
}

export default LocationsList;
