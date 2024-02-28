import { Options } from '../../const';
import { OptionItemProps } from '../../shared-types';

function OptionItem({name, isActive} : OptionItemProps): JSX.Element {
  return (
    <li className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex={0}
    >
      {name}
    </li>
  );
}

function OptionsList(): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Options.map((name, index) => <OptionItem name={name} isActive={index === 0} key={name}/>)}
    </ul>
  );
}

export default OptionsList;
