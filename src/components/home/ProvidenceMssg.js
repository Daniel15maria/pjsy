import React from 'react';
import '../../index.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import topleft1 from '../images/topleft1.png';
import director from '../images/director.png';

export const ProvidenceMssg = () => {
    return (
        <div>
            <div className='overlap-group'>
                <Image className="wave-left1 d-none d-sm-none d-md-none d-lg-block" alt="left1" src={topleft1} />
            </div>
            <section className='d-flex align-items-center justify-content-center'>

                <Container>
                    <Row className='mb-3'>
                        <Col lg={4} md={0} sm={0}>
                        </Col>
                        <Col lg={8} md={12} sm={12}>
                            <div className='each-head text-center'>Director's Message</div>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={4} md={12} sm={12} className='d-flex align-items-center justify-content-center'>
                            <Image fluid className='dir-img mb-3' src={director} alt="directors mssg" />
                        </Col>
                        <Col lg={8} md={12} sm={12} className='h5 d-flex align-items-center'>
                            <div>
                                <p>
                                    I, Fr. Anthony Prakash SJ, as the chairperson of this ministry,
                                    welcome you all to this new website of us.
                                </p>
                                <p>
                                    The ministry has many young Jesuits priests as its members. We as one team are privileged to lead the efforts of motivating,
                                    empowering and engaging the vibrant youth of our mission area. We strongly believe in creating an inclusive environment for our youth where they could explore and exhibit their talents, develop their leadership skills and actively
                                    involve in creating a just society. We try to do all these through spiritual formation, social analysis and outreach,
                                    value systems awareness, educational initiatives and training. We try to develop in them the critical thinking skill
                                    and a deep sense of responsibility towards each other and environment.
                                </p>
                                <p>
                                    I invite you all to explore our new website to know more about our mission works among the youth of Bihar and
                                    Uttar Pradesh in India.
                                </p>
                                <p>
                                    Thank you for showing interest in our works. Let us together create a better world for us and the generations
                                    to come. We look forward to your collaboration through contribution and suggestions for the youth ministry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
};
