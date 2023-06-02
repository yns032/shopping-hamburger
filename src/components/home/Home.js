import React from "react";
import "./home.css";
import { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function Home() {
  const [menuItems, setMenuItems] = useState(items); //tatil bölgelerimiz
  const [activeCategory, setActiveCategory] = useState(""); //adana mı , mersin mi kategori
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div>
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="images/hero-bg.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Fast Food Restaurant</h5>
                <p className="text-white">
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="images/hero-bg.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Fast Food Restaurant</h5>
                <p className="text-white">
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/hero-bg.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Fast Food Restaurant</h5>
                <p className="text-white">
                  SDoloremque, itaque aperiam facilis rerum, commodi, temporibus
                  sapiente ad mollitia laborum quam quisquam esse error unde.
                  Tempora ex doloremque, labore, sunt repellat dolore, iste
                  magni quos nihil ducimus libero ipsam.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container d-flex mt-5">
        <div className="col-6 p-1">
          <div className="card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="images/o1.jpg"
                  className="img-fluid rounded-start h-100 rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-white">Card title</h5>
                  <p className="card-text text-white">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="#" class="btn bg-warning">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-1">
          <div className="card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="images/o2.jpg"
                  className="img-fluid rounded-start h-100 rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-md-8 ">
                <div className="card-body">
                  <h5 className="card-title text-white">Card title</h5>
                  <p className="card-text text-white">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="#" class="btn bg-warning">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 ">
        <h2 className="text-center">Our Menu</h2>
      </div>
      <main>
        <section className="holiday section">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />

          <Menu items={menuItems} />
        </section>
      </main>
      <div className="container text-center mt-5">
        <button className="view text-white rounded-pill border-warning bg-warning mb-3">
          View More
        </button>
      </div>
      <div className="burger ">
        <div className="card mb-3 bg-dark p-5">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="images/about-img.png"
                className="img-fluid rounded-start py-5"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-burgerr">
                <h5 className="card-title text-white">We Are Feane</h5>
                <p className="card-text text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <button className="readmore bg-warning p-1 px-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <h2>Book A Table</h2>
        </div>
        <form class="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
