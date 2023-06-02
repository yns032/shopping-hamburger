import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <div
        className="burger min-vh-100  "
        style={{
          borderRadius: "0px !important",
        }}
      >
        <div className="card  bg-dark p-5">
          <div className="row g-0 ">
            <div className="col-md-6">
              <img
                src="images/about-img.png"
                className="img-fluid rounded-start py-1"
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
    </div>
  );
}

export default About;
