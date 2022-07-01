import React from "react";
import { Col,  Row } from "react-bootstrap";
import {Container} from 'reactstrap'
import BannerImage_1 from "../../images/hero-img1.png";

import './Banner.css'
const Banner = () => {
  return (
    <>
      <section className="banner__section">
        <Container >
          <Row>
            <Col lg="6" sm="12">
              <div className="left__banner d-flex justify-content-center flex-column align-items-start">
                <h1 className="display-2">
                  Online Payment Made <br /> Easy For you
                </h1>
                <p className="all__para__style">
                  Amet diam rebum dolore et dolore labore diam, amet gubergren
                  eirmod stet et est lorem sanctus clita, dolor diam stet
                  invidunt aliquyam magna. Magna et kasd kasd eirmod dolore. Ut
                  dolor ipsum consetetur ut sadipscing no. Labore erat accusam
                  et et at amet voluptua duo sit, lorem lorem sanctus tempor.{" "}
                </p>
                <h3 className=" fw-light">Get Early Access For You... </h3>
                <div className=" input-group mt-5">
                  <input
                    type="text"
                    className=" rounded-pill me-3 w-75 form-control"
                    placeholder='Enter your Email...'
                  />
                  <div className=" input__group__button">Get it now</div>
                </div>
              </div>
            </Col>

            <Col lg="6" sm="12">
              <div className="right__banner d-flex justify-content-center align-items-center ">
               
                 <img
                  src={BannerImage_1}
                  alt="bannerImage"
                  className=" img-fluid "
                />
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
