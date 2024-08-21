import { AppRoute, AuthorisationStatus } from './const.ts';

const getAuthorisationStatus = () => AuthorisationStatus.Auth;

export { getAuthorisationStatus };

export function getLayoutState(pathname: string) {
  let mainClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;

  if (pathname === AppRoute.Root) {
    mainClassName = ' page--gray page--main';
    linkClassName = ' header__logo-link--active';
  } else if (
    pathname === AppRoute.FavouritesPage ||
    pathname === AppRoute.OfferPage
  ) {
    mainClassName = '';
    linkClassName = ' header__logo-link--active';
  } else if (pathname === AppRoute.LoginPage) {
    mainClassName = ' page--gray page--login';
    shouldRenderUser = false;
  }

  return { mainClassName, linkClassName, shouldRenderUser };
}
