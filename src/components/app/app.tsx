import MainPage from '../../pages/main-page/main-page';
import { MainPageScreenProps } from '../../shared-types';

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <MainPage offerCount={offerCount} />
    </div>
  );
}

export default App;
