import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import about from '../../../images/about-section.png';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left>
                            <Image className="img-fluid" src={about} alt="..." />
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade right>
                            <h6 className="text-info">About Us</h6>
                            <h3>Why Choose Us For ?</h3>
                            <span className="animate-border border-black"></span>
                            <p className="text-muted mt-2"> <small>Social media is a platform that is using by billions of people in a day. This is the way of expressing your mood and uploading the status. So everyone is trying to update regularly updating their status to connecting their contacts.  </small> </p>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;