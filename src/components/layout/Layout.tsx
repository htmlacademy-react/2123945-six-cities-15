import Header from '../header/Header';
import MainPage from '../../pages/main-page/MainPage';
import Footer from '../footer/Footer';

type PageLayoutProps = {
  offerCount: number;
};

function PageLayout({ offerCount }: PageLayoutProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainPage offerCount={offerCount} />
      <Footer />
    </div>
  );
}

export default PageLayout;
