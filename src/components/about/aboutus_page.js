import aboutbg from '../images/aboutimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import HistoryComp from './HistoryComp';
import FullMissVissPage from './Full_Miss_Viss_Page';
import AboutDec from './aboutDecPage';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const AboutUsPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={aboutbg} className="img-fluid w-100 " />
            <AboutDec />
            <FullMissVissPage />
            <HistoryComp />
            <FormComponent />
            <Footer />
        </div>
    )
}
function FormComponent() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="container">
                <Row className="justify-content-center">
                    <Col md={8} className="m-5">
                        <form className={`shadow-lg p-3 ${validated ? 'was-validated' : ''}`} action="/thankyou.html" noValidate onSubmit={handleSubmit}>
                            <div className="m-2">
                                <h1 className="">Form</h1>
                            </div>
                            <Row className="m-2">
                                <Col>
                                    <label htmlFor="first-name" className="form-label">First Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="First Name" id="first-name" required />
                                    <div className="valid-feedback">First Name validated</div>
                                    <div className="invalid-feedback">Please enter a valid First Name</div>
                                </Col>
                                <Col>
                                    <label htmlFor="last-name" className="form-label">Last Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="Last Name" id="last-name" required />
                                    <div className="valid-feedback">Last Name validated</div>
                                    <div className="invalid-feedback">Please enter a valid Last Name</div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" placeholder="Email" id="email" required />
                                    <div className="valid-feedback">Email validated</div>
                                    <div className="invalid-feedback">Please enter a valid Email</div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <label htmlFor="phone" className="form-label">Phone <span className="text-danger">*</span></label>
                                    <input type="tel" className="form-control" placeholder="Phone" id="phone" required />
                                    <div className="valid-feedback">Phone validated</div>
                                    <div className="invalid-feedback">Please enter a valid Phone</div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <label className="form-label">Select one <span className="text-danger">*</span></label>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radioCheck1" name="radio-stacked" required />
                                        <label className="form-check-label" htmlFor="radioCheck1">Vegetarian</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radioCheck2" name="radio-stacked" required />
                                        <label className="form-check-label" htmlFor="radioCheck2">Non Vegetarian</label>
                                        <div className="valid-feedback">Option validated</div>
                                        <div className="invalid-feedback">Please select a valid option</div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <label htmlFor="color" className="form-label">Select one <span className="text-danger">*</span></label>
                                    <select className="form-select" required>
                                        <option value="">Choose a color</option>
                                        <option value="1">Red</option>
                                        <option value="2">Green</option>
                                        <option value="3">Blue</option>
                                    </select>
                                    <div className="valid-feedback">Selection validated</div>
                                    <div className="invalid-feedback">Please select a valid option</div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <textarea className="form-control" placeholder="Message" rows="4" required></textarea>
                                    <div className="valid-feedback">Message Validated</div>
                                    <div className="invalid-feedback">Please enter a message</div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkbox" required />
                                        <label className="form-check-label" htmlFor="checkbox">Agree to the terms and conditions</label>
                                        <div className="valid-feedback">Thanks for accepting the terms and conditions</div>
                                        <div className="invalid-feedback">Please agree to the terms and conditions</div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}