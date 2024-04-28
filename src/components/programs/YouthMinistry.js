import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import youth from '../images/Prog/prog2/img1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import youthside from '../images/Prog/prog2/img2.png'
import youthright from '../images/Prog/prog2/img3.png'


const YouthMinistry = () => {
    return (
        <div className='justify-text'>
            <div style={{ backgroundColor: '#F6ECDA' }}>

                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='each-head2 mt-5'>
                        <h1 className='mt-5'> YOUTH MINISTRY COMMISION MEETING </h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="mission img" src={youth} className="mt-4 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-2 mt-4 h-1'>
                        <strong><h3> We had the youth commission meeting from 10th-12th March 2023 in Vidya Niwas, Varanasi.
                            It was a very fruitful meeting as we have planned meticulously for the forthcoming year. We evaluated
                            our works of the past year and discussed about the coming events of the year. We have organized “Summer
                            Skill Development Program 2023” from 23 April to 8 May 2023 at Atmadarshan, Patna. There are total of 48
                            inter completed youth; 32 girls and 16 boys from around 17 parishes. They are taught spoken English, writing
                            skills, GANGA LAHAR – MAY - JUNE, 2023 12 Biology, speech drills, certificate computer course, motivation,
                            Spirituality and so on. Fr. Joseph Sebastian, Fr. Martin and the college community have been very helpful to
                            us in this program. Our sincere thanks to all those who helped us in this program, very specially Sr. Monica
                            SCN, Sr. Priya SCN, Frs. Christy, Sushil, Pulikal, Jeevan, Sebastian Alphonse, Sijo, Sr.Anita CJ, Sr. Pushpa,
                            Mr. Amarjeet, Fr. Alwyn and the team.</h3></strong>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={youthside} alt='youth side pic' className="img-fluid my-5" />
                        </Col>
                        <Col lg={6}>
                            <img src={youthright} alt='youth side pic' className="img-fluid my-5" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default YouthMinistry;