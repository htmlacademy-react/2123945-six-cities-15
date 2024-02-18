import Logo from '../logo/Logo';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <a className="footer__logo-link" href="main.html">
        <Logo />
      </a>
    </footer>
  );
}

export default Footer;
