import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer.tsx';
import Header from '../header/header.tsx';
import { MainPageScreenProps } from '../../shared-types';

function App({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainPage offerCount={offerCount} />
      <Footer/>
    </div>
  );
}

export default App;
