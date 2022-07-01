import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <footer>
            <Container>
                <Row>
                    <Col lg='10' sm='12' className=' mx-auto'>
                        <Row>
                            <Col lg='3' sm='6'>
                                <div className="footer__content_1">
                                    <h2>Company</h2>
                                    <ul>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='3' sm='6'>
                                <div className="footer__content_1">
                                    <h2>Support</h2>
                                    <ul>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='3' sm='6'>
                                <div className="footer__content_1">
                                    <h2>Services</h2>
                                    <ul>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#about">About</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='3' sm='6'>
                                <div className="footer__content_1">
                                    <h2>Follow Us</h2>
                                    <div className="follow__content d-flex align-items-center justify-content-start gap-5">
                                        <a href="/"><i class="fa-brands fa-facebook  icon__style"></i></a>
                                        <a href="/"><i class="fa-brands fa-github icon__style "></i></a>
                                        <a href="/"><i class="fa-brands fa-linkedin icon__style"></i></a>
                                        <a href="/"><i class="fa-brands fa-telegram icon__style"></i></a>

                                    </div>
                                </div>
                        
                            </Col>
                            
                        </Row>
                        <hr />
                        <p className=' all__para__style text-center w-100'><i class="fa-solid fa-copyright"></i> Copyright @ 2022 E-Learning. All rights reserved.</p>

                    </Col>
                </Row>
            </Container>
        </footer>
        
    </>
  )
}

export default Footer