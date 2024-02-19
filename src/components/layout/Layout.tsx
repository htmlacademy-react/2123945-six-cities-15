import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';

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
