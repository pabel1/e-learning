import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorksApi from "../Api/WorksApi";
// import { download } from '@fortawesome/free-solid-svg-icons'
import './Works.css'
const Works = () => {
  const [works, setWorks] = useState(WorksApi);/* eslint-disable-line */
  return (
    <>
      <section>
        <div className="work__container">
          <h1 className=" main__heading text-center">How does is work</h1>
          <Row>
            {works.map((current) => {

              return (
                <>
                  <Col lg="4" sm="12">
                    <div className="content__container">
                      <i class={`fontawesome__style ${current.logo}`}></i>
                      <h2 className="sub__heading ">{current.title} </h2>
                      <p className="all__para__style">{current.info} </p>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Works;
