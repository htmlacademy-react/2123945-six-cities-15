import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';
import { getLayoutState } from '../../utils';

type LayoutProps = {
  authorisationStatus: string;
};

function Layout({ authorisationStatus }: LayoutProps): JSX.Element {
  const { pathname } = useLocation();
  const { mainClassName, linkClassName, shouldRenderUser } =
    getLayoutState(pathname);
  const isFavoritePage = pathname === AppRoute.FavouritesPage;

  return (
    <div className={`page${mainClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link${linkClassName}`}
                to={AppRoute.Root}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            {shouldRenderUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.FavouritesPage}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      {authorisationStatus === AuthorisationStatus.Auth ? (
                        <>
                          <span className="header__user-name user__name">
                            Oliver.conner@gmail.com
                          </span>
                          <span className="header__favorite-count">3</span>
                        </>
                      ) : (
                        <span className="header__login">Sign in</span>
                      )}
                    </Link>
                  </li>
                  {authorisationStatus === AuthorisationStatus.Auth && (
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to={AppRoute.LoginPage}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
      {isFavoritePage ? (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Root}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

export default Layout;
