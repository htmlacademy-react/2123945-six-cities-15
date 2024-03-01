import { MainPageScreenProps } from '../../shared-types';

function SortingHeader({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <b className="places__found">
      <b className="places__found">{offerCount} places to stay in Amsterdam</b>
    </b>
  );
}

export default SortingHeader;
