import CitiesList from '../../components/city-item/city-item';
import OptionsList from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import SortingHeader from '../../components/sorting-header/sorting-header';
import { MainPageScreenProps } from '../../shared-types';

function MainPage({ offerCount }: MainPageScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList city={'Paris'}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <SortingHeader offerCount={offerCount}/>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <OptionsList/>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <CardsList/>
            </div>
          </section>
          <Map/>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
