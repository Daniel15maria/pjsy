import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import magisbg from '../images/Prog/magis/magis1.png';
import magisSide from '../images/Prog/magis/magis2.png';
import magisCenter from '../images/Prog/magis/magis3.png';
import { Footer } from '../resuable/footer';
import '../../index.css';

const MagisPage2023 = () => {
    return (
        <div className='justify-text'>
            <img alt="Programs Background Image" src={magisbg} className="img-fluid w-100" />
            <div style={{ backgroundColor: '#F6ECDA' }} >
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='mt-5 each-head2'>
                        <h1 > About MAGIS </h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="mission img" src={magisCenter} className="mt-5 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-5 h5' >
                        <h5> <strong> MAGIS 2023, was a four days event, which proved to be a transformative and enriching experience for all Magis
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
                            the acting Youth Director of Patna who accompanied us throughout this Event.</strong></h5>
                    </Row>

                    <Row>
                        <Col lg={12} className="d-flex justify-content-center">
                            <img alt="Programs Background Image" src={magisSide} className="img-fluid w-60" />
                        </Col>
                    </Row>

                </Container>



            </div>
            <Container className='d-flex justify-content-center align-items-center'>
                <Row>
                    <p className='each-subhead2'> Overall Rating: <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}><progress value={0.8} /></span> <Button variant='secondary'>9.5/10</Button></p>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default MagisPage2023;