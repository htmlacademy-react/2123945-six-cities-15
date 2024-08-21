import { SORTING_OPTIONS } from '../../const';
import { OptionItemProps } from '../../shared-types';

function OptionItem({ optionName, isActive }: OptionItemProps): JSX.Element {
  return (
    <li
      className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex={0}
    >
      {optionName.name}
    </li>
  );
}

function OptionsList(): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SORTING_OPTIONS.map((optionName, index) => (
        <OptionItem
          optionName={optionName}
          isActive={index === 0}
          key={optionName.name}
        />
      ))}
    </ul>
  );
}

export default OptionsList;
