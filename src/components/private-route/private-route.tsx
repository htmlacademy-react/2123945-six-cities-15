import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) : JSX.Element {
  const { authorisationStatus, children } = props;

  return (
    authorisationStatus === AuthorisationStatus.Auth ? children : <Navigate to={AppRoute.LoginPage} />
  );
}

export default PrivateRoute;
