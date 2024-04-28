import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import donatebg from '../images/donateimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Donate = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={donatebg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <div className='each-head my-4'>Donate Now</div>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='green-box h5 p-5'>
                            <p>Patna Jesuits continue the mission of Jesus through the service of faith and promotion of justice in the state of Bihar, one of the most backward states in India in terms of economy, education and health care...</p>
                            <br />
                            <p>We are involved in building human communities based on values of freedom, fellowship and justice.</p>
                            <br />
                            <p>Join us in the venture… let us work together to improve the lives of the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                            <br />
                            <p>Contact Us to Donate</p>
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="me-2" />
                                <span>Fr. Joseph Sebastian<br /><h6>(Province Development Director)</h6></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhone className="me-2" />
                                <span>+91 9871528965 <br />+91 9939447576</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaMapMarkerAlt className="me-2" />
                                <span>
                                    St. Xavier’s,
                                    <br />
                                    West Gandhi Maidan,
                                    <br />
                                    Patna – 800 001
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form className='h5 blue-text'>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter street address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter state" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter country" />
                            </Form.Group>
                            <Button className='my-4' variant="primary" type="submit">
                                Submit Details
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
