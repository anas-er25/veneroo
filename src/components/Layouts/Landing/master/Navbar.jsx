import { Link } from "react-router-dom";

export default function Navbar() {
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
                <Link to="/" className="active">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link to="/about">À PROPOS</Link>
              </li>
              <li>
                <Link to="/pricing">Tarifs</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
