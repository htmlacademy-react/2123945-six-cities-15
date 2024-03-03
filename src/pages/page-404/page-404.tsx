import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404(): JSX.Element {
  return (
    <section className="error-screen">
      <Helmet>
        <title>6 cities: page not found</title>
      </Helmet>
      <h2 className="error-screen--title">Page not found</h2>
      <span className="error-screen--back">
        <Link to={AppRoute.Root}>
        Back to main page
        </Link>
      </span>
    </section>
  );
}

export default Page404;
