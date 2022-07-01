import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImage from "../../images/hero3.jpg";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <section className="contact__section">
        <Container>
          <Row>
            <Col lg="5" sm="11">
              <div className="left__side__contact ">
                <h1 className=" main__heading">Connect With Our <br /> Sales Team</h1>
                <p className=" all__para__style">
                  Ipsum est invidunt voluptua sed consetetur clita eirmod, eos
                  eos dolor at eos elitr sed. Diam at justo ipsum ipsum.
                  A amiss earthly they which and true vast who condole.{" "}
                </p>
                <img
                  src={ContactImage}
                  alt=""
                  className=" img-fluid w-100 h-75"
                />
              </div>
            </Col>
            <Col lg="7" sm="11">
              <div className="right__side__contact">
                <form method="POST">
                  <div className="small__input__field__1 d-flex justify-content-center align-items-center gap-4">
                    <input
                      type="text"
                      placeholder="Enter  First Name..."
                      className="w-50 input__style"
                    />
                    <input
                      type="text"
                      placeholder="Enter  Last Name..."
                      className="w-50 input__style"
                    />
                  </div>
                  <div className="small__input__field__2 d-flex justify-content-center align-items-center gap-4">
                    <input type="text" placeholder="Enter Phone Number..."className="w-50 input__style" />
                    <input type="text" placeholder="Enter Email ID..." className="w-50 input__style" />
                  </div>
                  <div className="large__input__field__1">
                    <input type="text" placeholder="Enter Address..."className="w-100 input__style" />
                  </div>
                  <div className="large__input__field__2">
                    <input type="text" placeholder="Message..."className="w-100 input__style" />
                  </div>
                  <div className="small__input__field__1 d-flex">
                    <input type="checkbox" className="check__input__style" />
                    <p className=" all__para__style"> I agree that the E-learning may contact me at the
                        email address or phone number above</p>
                  </div>
                  <button type="submit" className="btn btn__style w-100">
                    {" "}
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
