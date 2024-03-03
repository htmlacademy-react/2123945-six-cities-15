import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute (props: PrivateRouteProps) : JSX.Element {
  const { authorisationStatus, children, isReverse } = props;

  // еще раз уточнить логику
  return (
    authorisationStatus === (isReverse ? AuthorisationStatus.NoAuth : AuthorisationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.LoginPage} />
  );
}

export default PrivateRoute;
