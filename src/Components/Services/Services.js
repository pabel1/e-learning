import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import ServicesApi from "../Api/ServicesApi";

const Services = () => {
  const [servicesData, setServicesData] = useState(ServicesApi);/* eslint-disable-line */
   

  return (
    <>
      <section>
        <Container>
          <div className="services__content">
            <h1 className="text-center">How To send Money</h1>
            <Row>
              {servicesData.map((currentElement) => {
                const { id, logo, title, info } = currentElement;
                return (
                  <>
                    <Col lg="4" sm="11">
                      <div className="card__content " key={id}>
                         <i className={`fontawesome__style ${logo}`}></i>
                        <h2 className="sub__headingg text-center">{title}</h2>
                        <p >{info}</p>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
