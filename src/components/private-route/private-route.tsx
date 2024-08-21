import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';

type PrivateRouteProps = {
  authorisationStatus: (typeof AuthorisationStatus)[keyof typeof AuthorisationStatus];
  children: JSX.Element;
  isReverse?: boolean;
};

function PrivateRoute({
  authorisationStatus,
  children,
  isReverse = false,
}: PrivateRouteProps): JSX.Element {
  if (isReverse && authorisationStatus === AuthorisationStatus.NoAuth) {
    return children;
  }

  if (!isReverse && authorisationStatus === AuthorisationStatus.Auth) {
    return children;
  }

  return <Navigate to={isReverse ? AppRoute.Root : AppRoute.LoginPage} />;
}

export default PrivateRoute;
