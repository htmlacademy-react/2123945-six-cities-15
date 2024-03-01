import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/Footer';

function Layout(): JSX.Element {
  return (
    <Header/>
      <main>
        <Outlet />
      </main>
    <Footer/>
  );
}

export default Layout;
