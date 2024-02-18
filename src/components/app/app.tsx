import MainPage from '../../pages/main-page/MainPage';

type MainPageScreenProps = {
  offerCount: number;
};

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  return <MainPage offerCount={offerCount} />;
}

export default App;
