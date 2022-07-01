import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import AboutImage from "../../images/about.png";
import SupportImage from '../../images/support.png'
import AboutApi from "../Api/AboutApi";
const About = () => {
  const [aboutData, setAboutData] = useState(AboutApi);
  return (
    <>
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="5" sm="12">
              <div className="left__side text-center">
                <img src={AboutImage} alt="" />
              </div>
            </Col>
            <Col lg="7" sm="12">
              <div className="right__side">
                <h3 className="mini__title">
                  --Available Only @ Google and IOS App Store{" "}
                </h3>
                <h1 className="main__heading">How To Use This App?</h1>
                {aboutData.map((currentElement) => {
                  return (
                    <>
                      <div className="dynamic__content">
                        <Row>
                          <Col lg="1" sm="1">
                            <div className="num">{currentElement.id}</div>
                          </Col>
                          <Col lg="10" sm="10">
                            <div className="details">
                              <h2>{currentElement.title}</h2>
                              <p className="all__para__style">
                                {currentElement.info}{" "}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  );
                })}

                <br />
                <button className="btn btn__style__2">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="7" sm="12">
              <div className="right__side right__side__content d-flex align-items-start justify-content-center flex-column">
                <h3 className="mini__title">--Support In Any Languages </h3>
                <h1 className="main__heading">
                  World Class Support is <br /> Available
                </h1>
                {aboutData.map((currentElement) => {
                  return (
                    <>
                      <div className="dynamic__content">
                        <Row>
                          <Col lg="1" sm="1">
                            <div className="num">{currentElement.id}</div>
                          </Col>
                          <Col lg="10" sm="10">
                            <div className="details">
                              <h2>{currentElement.title}</h2>
                              <p className="all__para__style">
                                {currentElement.info}{" "}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  );
                })}

                <br />
                <button className="btn btn__style__2">Learn More</button>
              </div>
            </Col>
            <Col lg="5" sm="12">
              <div className="left__side sec__left__side  text-center">
                <img src={SupportImage} alt="" className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
