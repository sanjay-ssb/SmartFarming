import React from "react";
import "../index.css";
import About from "./About";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="bd-example">
          <div className="container-fluid ">
            <Carousel>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100 img-fluid"
                  src={require("../photos/caro0.jpg")}
                  alt="carousel"
                />
                <Carousel.Caption>
                  <h2 className="caro_text">
                    How to shape the future of farming?
                  </h2>
                  <p>
                    Find out about the importance of sustainable agriculture,
                    potential solutions to achieve it and how you can
                    contribute. The future of farming is here!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100 img-fluid"
                  src={require("../photos/caro1.jpg")}
                  alt="carousel"
                />
                <Carousel.Caption>
                  <h2 className="caro_text">
                    How to shape the future of farming?
                  </h2>
                  <p>
                    Find out about the importance of sustainable agriculture,
                    potential solutions to achieve it and how you can
                    contribute. The future of farming is here!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100 img-fluid"
                  src="https://images.unsplash.com/photo-1475912383998-112140380034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
                  alt="carousel"
                />
                <Carousel.Caption>
                  <h2 className="caro_text">
                    How to shape the future of farming?
                  </h2>
                  <p>
                    Find out about the importance of sustainable agriculture,
                    potential solutions to achieve it and how you can
                    contribute. The future of farming is here!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container flex mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 col-xxl-6 mar">
            <div className="text-center mx-auto my-auto  ">
              <span className="txt1">Agriculture</span>
              <div className="txt2">Today we can!</div>
              <div>
                Agriculture is the world's largest industry. Intensive
                agriculture as it has been practiced since the 1960s has very
                high yields, but depletes the soil and pollutes the environment:
                greenhouse gas emissions, biodiversity loss, ocean
                acidification, etc.
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
            <div>
              <figure>
                <img
                  src={require("../photos/farming2.jpg")}
                  alt="it is somehing"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}

      <About />

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
              <img
                src="https://images.unsplash.com/photo-1530464684439-723262c0d16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhcm1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="card-img-top zoom mx-auto my-auto img-fluid"
                alt="..."
              />
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-xxl-6">
              <div className="text-center mx-auto my-auto">
                <div className="txt1 mt-5">
                  What is sustainable agriculture?
                </div>
                <div>
                  <p>
                    Green agriculture is the application of the sustainable
                    development principles to agriculture: ensuring the
                    production of food, wood and fibers while respecting the
                    ecological, economic and social limits that ensure the
                    durability of this production. For instance, sustainable
                    farming minimises the use of pesticides that can harm the
                    health of farmers and consumers
                  </p>
                  <br />
                  <p style={{ fontSize: "25px" }}>
                    Key principles are linked to sustainable agriculture:
                  </p>
                  <ol style={{ fontWeight: "bold" }}>
                    <li>
                      Develop efficient, self-sufficient and economical
                      production systems that provide decent incomes
                    </li>
                    <li>Preserve and protect biodiversity and territories</li>
                    <li>Optimize the use of natural resources</li>
                    <li>Manage the quality of air, water and soil</li>
                    <li>
                      Increase energy efficiency in food production and
                      distribution
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "100px" }}>
        <div className="text-center mt-5">
          <h1 className="display-4 head">
            Methods to Improve Farming Productivity{" "}
          </h1>
          <hr className="w-75 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 col-xxl-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1530836176759-510f58baebf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VlZHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top img-fluid zoom"
                  alt="..."
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://www.agrivi.com/blog/how-high-quality-seeds-can-improve-crop-yield/#:~:text=In%20layman's%20terms%2C%20foundation%20seeds,cotton%20%E2%80%93%2090%20percent%20genetic%20purity."
                      class="btn btn-primary zoom"
                    >
                      Quality Of Seeds
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-xxl-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1527847263472-aa5338d178b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNyb3AlMjBwcm90ZWN0aW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top img-fluid zoom"
                  alt="..."
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://eos.com/blog/crop-protection-methods-that-boost-farming-productivity/"
                      class="btn btn-primary  zoom"
                    >
                      Crop Protection Methods
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-xxl-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1642098397676-c477ebc0bc02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29pbCUyMHRlc3Rpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top img-fluid zoom"
                  alt="..."
                />
                <div className="card-body">
                  <center>
                    <a
                      href="https://www.extension.iastate.edu/news/proper-soil-sampling-can-lead-better-yields-and-profits"
                      class="btn btn-primary zoom"
                    >
                      Soil Testing & Its Quality
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
