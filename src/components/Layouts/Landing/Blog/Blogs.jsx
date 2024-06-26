import BlogSearch from "./BlogSearch";
import Breadcrumbs from "../master/Breadcrumbs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <Breadcrumbs title="Blogs" />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <Link to="/singleblog">
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia
                  </Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="/singleblog">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="/singleblog">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="/singleblog">12 Comments</Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                  <div className="read-more">
                    <Link to="/singleblog">Read More</Link>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <Link to="/singleblog">
                    Nisi magni odit consequatur autem nulla dolorem
                  </Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="/singleblog">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="/singleblog">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="/singleblog">12 Comments</Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Incidunt voluptate sit temporibus aperiam. Quia vitae aut
                    sint ullam quis illum voluptatum et. Quo libero rerum
                    voluptatem pariatur nam. Ad impedit qui officiis est in non
                    aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et
                    quia molestias laboriosam. Tempora nam odit omnis eum
                    corrupti qui aliquid excepturi molestiae. Facilis et sint
                    quos sed voluptas. Maxime sed tempore enim omnis non alias
                    odio quos distinctio.
                  </p>
                  <div className="read-more">
                    <Link to="/singleblog">Read More</Link>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <Link to="/singleblog">
                    Possimus soluta ut id suscipit ea ut. In quo quia et soluta
                    libero sit sint.
                  </Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="/singleblog">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="/singleblog">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="/singleblog">12 Comments</Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Aut iste neque ut illum qui perspiciatis similique
                    recusandae non. Fugit autem dolorem labore omnis et. Eum
                    temporibus fugiat voluptate enim tenetur sunt omnis.
                    Doloremque est saepe laborum aut. Ipsa cupiditate ex harum
                    at recusandae nesciunt. Ut dolores velit.
                  </p>
                  <div className="read-more">
                    <Link to="/singleblog">Read More</Link>
                  </div>
                </div>
              </article>

              <article className="entry">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <Link to="/singleblog">
                    Non rem rerum nam cum quo minus. Dolor distinctio deleniti
                    explicabo eius exercitationem.
                  </Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <Link to="/singleblog">John Doe</Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <Link to="/singleblog">
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <Link to="/singleblog">12 Comments</Link>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Aspernatur rerum perferendis et sint. Voluptates cupiditate
                    voluptas atque quae. Rem veritatis rerum enim et autem.
                    Saepe atque cum eligendi eaque iste omnis a qui. Quia sed
                    sunt. Ea asperiores expedita et et delectus voluptates
                    rerum. Id saepe ut itaque quod qui voluptas nobis porro
                    rerum. Quam quia nesciunt qui aut est non omnis. Inventore
                    occaecati et quaerat magni itaque nam voluptas. Voluptatem
                    ducimus sint id earum ut nesciunt sed corrupti nemo.
                  </p>
                  <div className="read-more">
                    <Link to="/singleblog">Read More</Link>
                  </div>
                </div>
              </article>

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
