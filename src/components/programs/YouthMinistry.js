import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import youth from '../images/Prog/prog2/img1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import youthside from '../images/Prog/prog2/img2.png';
import youthright from '../images/Prog/prog2/img3.png';

const YouthMinistry = () => {
    return (
        <div className='justify-text '>
            <div style={{ backgroundColor: '#F6ECDA' }}>
                <Container className='py-5'>
                    <Row className='justify-content-center mt-5'>
                        <div className='each-subhead2 text-center'>YOUTH MINISTRY COMMISION MEETING</div>
                    </Row>

                    <Row className='justify-content-center'>
                        <Image fluid rounded alt="mission img" src={youth} className="mt-4 mb-3" />
                    </Row>

                    <Row className='justify-content-center lead mt-2 h-1'>
                        <strong><h3><p>We had the youth commission meeting from 10th-12th March 2023 in Vidya Niwas, Varanasi. It was a very fruitful meeting as we have planned meticulously for the forthcoming year. We evaluated our works of the past year and discussed about the coming events of the year. We have organized “Summer Skill Development Program 2023” from 23 April to 8 May 2023 at Atmadarshan, Patna. There are total of 48 inter completed youth; 32 girls and 16 boys from around 17 parishes. They are taught spoken English, writing skills, GANGA LAHAR – MAY - JUNE, 2023 12 Biology, speech drills, certificate computer course, motivation, Spirituality and so on. Fr. Joseph Sebastian, Fr. Martin and the college community have been very helpful to us in this program. Our sincere thanks to all those who helped us in this program, very specially Sr. Monica SCN, Sr. Priya SCN, Frs. Christy, Sushil, Pulikal, Jeevan, Sebastian Alphonse, Sijo, Sr.Anita CJ, Sr. Pushpa, Mr. Amarjeet, Fr. Alwyn and the team.</p></h3></strong>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <img src={youthside} alt='youth side pic' className="img-fluid mt-3" />
                        </Col>
                        <Col lg={6}>
                            <img src={youthright} alt='youth side pic' className="img-fluid mt-3" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default YouthMinistry;
