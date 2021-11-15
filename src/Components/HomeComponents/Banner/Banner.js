import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../../images/banner-img.png';
import './Banner.css';

const Banner = () => {
    return (


        <Row className="align-items-center justify-content-center banner">
            {/* <Col md={4}>
                    <h1 className="text-info">Super Bike Convention</h1>
                </Col> */}
            <Col className="offset-md-1" md={12}>
                <Image className="img-fluid" src={banner} alt="..." />
            </Col>
        </Row>


    );
};

export default Banner;



