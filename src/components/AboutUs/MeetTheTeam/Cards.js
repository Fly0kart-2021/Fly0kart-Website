import React, { useEffect } from "react";
import Styles from "./Cards.module.css";
import illustration from "./images/bgPhoto.svg";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import "./ProfileCard.css"
import { Row, Col, Container } from "react-bootstrap"
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
const Cards = ({ data, index }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={Styles.container} data-aos="fade-up">
      {data[index].map((card) =>
        card.map((item) => (
          <div>
            {item.name == "Rameez Khan" ?

              <Container className="pb-5 pt-4 text-center">
                <div class="container-fluid">
                  <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                      <div class="card bio-card">
                        <div class="card-horizontal row">
                          <div class="col-12 col-sm-12 col-md-4  my-auto">
                            <div class="img-square-wrapper">
                              <header >
                                {/* <!-- here’s the avatar --> */}
                                <a target="_blank" href="#">
                                  <img src={item.image} class="hoverZoomLink bio-image" />
                                </a>

                              </header>
                            </div>
                            {/* <!-- the username --> */}
                            <h1 className="bio-name mt-4">{item.name}</h1>

                            {/* <!-- and role or location --> */}
                            <h2 className="bio-title mb-2">{item.title}</h2>
                          </div>
                          <div class="col-12 col-sm-12 col-md-8">
                            <div class="card-body">
                              <div class="profile-bio">
                                <p className="mt-2">
                                  {item.description}
                                </p>
                                <Row className="justify-content-center mt-5">
                                  <ul className="profile-social-links">
                                    <li>
                                      <a className="facebook" target="_blank" href="#">
                                        <FaFacebookF size={15} />
                                      </a>
                                    </li>
                                    <li>
                                      <a className="twitter" target="_blank" href="#">
                                        <FaTwitter size={15} />
                                      </a>
                                    </li>
                                    <li>
                                      <a className="instagram" target="_blank" href="#">
                                        <FaInstagram size={15} />
                                        <i class="fa fa-github"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="twitter" target="_blank" href="#">
                                        <FaTwitter size={15} />
                                      </a>
                                    </li>

                                  </ul>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>

              :
              <div className="m-5 mt-0 mb-0">
                <Container className="pb-5 pt-4 text-center">
                  <Row className="justify-content-center">
                    <aside class="profile-card">
                      <header>
                        <a target="_blank" href="#">
                          <img src={item.image} class="hoverZoomLink" />
                        </a>

                        <h1>{item.name}</h1>

                        <h2>{item.title}</h2>
                      </header>

                      <div class="profile-bio">

                        <p>{item.description}</p>

                      </div>

                      {/*   some social links to show off --> */}
                      <Row className="justify-content-center">
                        <ul className="profile-social-links mb-3">
                          <li>
                            <a className="facebook" target="_blank" href="#">
                              <FaFacebookF size={15} />
                            </a>
                          </li>
                          <li>
                            <a className="twitter" target="_blank" href="#">
                              <FaTwitter size={15} />
                            </a>
                          </li>
                          <li>
                            <a className="instagram" target="_blank" href="#">
                              <FaInstagram size={15} />
                              <i class="fa fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a className="linkedin" target="_blank" href="#">
                              <FaLinkedinIn size={15} />
                            </a>
                          </li>

                        </ul>
                      </Row>

                    </aside>
                  </Row>
                </Container>
                {/* <div className={Styles.cardinner}>
              <div className={Styles.imageWrapper}>
                <div>
                  <img
                    src={illustration}
                    alt=""
                    className={Styles.OuterCircleImg}
                  />
                  <div className={Styles.empImg}>
                    <img
                      src={item.image}
                      alt=""
                      className={Styles.InnerCircleImg}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={Styles.name}>{item.name}</div>
                <div className={Styles.title}>{item.title}</div>
                <div className={Styles.desc}>{item.description}</div>
              </div>
            </div> */}
              </div>
            }
          </div>


        ))
      )}
    </div>
  );
};

export default Cards;
