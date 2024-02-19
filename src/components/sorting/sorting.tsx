import { Options } from '../../const';

type OptionItemProps = {
  name: typeof Options[number];
  isActive: boolean;
}

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
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <ul className="places__options places__options--custom places__options--opened">
        {Options.map((name, index) => <OptionItem name={name} isActive={index === 0} key={name}/>)}
      </ul>
    </form>
  );
}

export default OptionsList;
