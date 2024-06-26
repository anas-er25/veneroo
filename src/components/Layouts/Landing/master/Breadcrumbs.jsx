import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Breadcrumbs = ({ title }) => {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{title}</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;
