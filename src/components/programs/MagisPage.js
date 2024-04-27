import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import magisbg from '../images/Prog/magis/magis1.png';
import magisSide from '../images/Prog/magis/magis2.png';
import magisCenter from '../images/Prog/magis/magis3.png';
import { Footer } from '../resuable/footer';
import '../../index.css';

const MagisPage = () => {
    return (
        <div>
            <img alt="Programs Background Image" src={magisbg} className="img-fluid w-100" />
            <section className="d-flex align-items-center justify-content-center flex-column">
                <Container className='align-items-center justify-content-center'>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6}>
                            <img src={magisSide} alt='magis side pic' className="img-fluid my-5" />
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div
                                    className='each-head d-flex my-2 justify-content-start'>
                                    MAGIS 2023
                                </div>
                                <h2 className='each-subhead2'>Event/ Activity information</h2>
                                <ul>
                                    <li><strong>Name of the Activity/ Event</strong> MAGIS 2023</li>
                                    <li><strong>Date:</strong> 18th to 22nd October 2023</li>
                                    <li><strong>Venue:</strong> St. John’s School, Ranchi</li>
                                    <li><strong>Name of the Committee/ Club/ Department:</strong> AICUF</li>
                                    <li><strong>Beneficiaries:</strong> All the AICUFers of India and Nepal</li>
                                </ul>

                                <h2 className='each-subhead2'>Objective of the Activity/ Event</h2>
                                <ul>
                                    <li>To sensitize students to establish ‘a hope-filled future’.</li>
                                    <li>To orient youth towards their role in Nation Building.</li>
                                    <li>To motivate the students to be the change and bring difference in the society wherever one is placed.</li>
                                </ul>

                                <h2 className='each-subhead2'>Process</h2>
                                <ol>
                                    <li>Notice about the programme [Annexure 1]</li>
                                    <li>Selection of the Candidates to attend this Meet [Annexure 2]</li>
                                    <li>Programme flow chart [Annexure 3]</li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div style={{ backgroundColor: "#124076", color: "white" }}>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='mt-5'>
                        <h1>About MAGIS</h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="mission img" src={magisCenter} className="mt-5 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-5 h5'>
                        MAGIS 2023, was a four days event, which proved to be a transformative and enriching experience for all Magis
                        participants all over India and Nepal. Rooted in the Ignatian tradition of seeking excellence, Magis aimed to
                        holistic personal growth, community building, and a deeper connection with one's inner self in order to establish a
                        hope-filled future. This Youth Convention was organized by Jesuit conference of South Asia in St. Jonn’s School,
                        Ranchi, Jharkhand. As students we found ourselves very much blessed and lucky to attend this Mega Event.
                        The event provided a unique opportunity for each individual to explore, connect, serve, and contemplate,
                        fostering personal and collective growth. All the participants were very happy to carry the lessons learnt
                        during the program. This event became for everyone a catalyst for positive change and a source of inspiration
                        for living a purposeful and meaningful life. Hence, we are very grateful to our college management especially to
                        our Principal Fr. Dr. Martin Poras SJ, Vice-Principal Fr. Dr. Sushil Bilung SJ who gave us this golden opportunity
                        and allowed us to attend this program. Our special thanks to our Co-ordinator Fr. Jeevan Isahak SJ and Fr. Joyson Fernandes SJ,
                        the acting Youth Director of Patna who accompanied us throughout this Event.
                    </Row>
                </Container>
            </div>
            <Container className='d-flex justify-content-center align-items-center'>
                <Row>
                    <p className='each-subhead2'> Overall Rating: <span><progress value={0.8} /></span></p>
                </Row>

            </Container>

            <Footer />
        </div>
    );
}

export default MagisPage;