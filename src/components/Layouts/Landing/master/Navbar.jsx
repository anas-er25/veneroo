import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/">
              <span>Vene</span>roo
            </Link>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>À PROPOS</Link>
              </li>
              <li>
                <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Tarifs</Link>
              </li>
              <li>
                <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blog</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="header-social-links d-flex">
            <a href="javascript::void(0)" className="twitter">
              <i className="bu bi-twitter"></i>
            </a>
            <a href="javascript::void(0)" className="facebook">
              <i className="bu bi-facebook"></i>
            </a>
            <a href="javascript::void(0)" className="instagram">
              <i className="bu bi-instagram"></i>
            </a>
            <a href="javascript::void(0)" className="linkedin">
              <i className="bu bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
