import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import donatebg from '../images/donateimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Donate = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            // Construct query parameters from form data
            const queryParams = new URLSearchParams(formData).toString();
            // Redirect to the donation page with query parameters
            window.location.href = `http://localhost:5000/donate?${queryParams}`;
        } else {
            setValidated(true);
        }
    };

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
                            <p>Patna Jesuits continue the mission of Jesus through the service of faith and promotion of
                                justice in the state of Bihar, one of the most backward states in India in terms of economy,
                                education and health care...</p>
                            <br />
                            <p>We are involved in building human communities based on values
                                of freedom, fellowship and justice.</p>
                            <br />
                            <p>Join us in the venture… let us work together to improve the lives of
                                the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                            <br />
                            <p>Contact Us to Donate</p>
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="me-2" />
                                <span>Fr. Joseph Sebastian<br /><h6>( Province Development Director)</h6></span>
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
                        <Form className='h5 blue-text' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={validated && !formData.name}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    required
                                    isInvalid={validated && !formData.email}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    pattern="[0-9]{10}"
                                    required
                                    isInvalid={validated && !formData.phone}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid 10-digit phone number.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="Enter street address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={validated && !formData.address}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your street address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    placeholder="Enter city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={validated && !formData.city}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your city.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="state"
                                    placeholder="Enter state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={validated && !formData.state}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your state.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="country"
                                    placeholder="Enter country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={validated && !formData.country}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your country.</Form.Control.Feedback>
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
