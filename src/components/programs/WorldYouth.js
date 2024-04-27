import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import worldyouth from '../images/Prog/prog4/img1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import youthdown from '../images/Prog/prog4/img2.png'


const YouthMinistry = () => {
    return (
        <div className='justify-text'>
            <div style={{ backgroundColor: '#F6ECDA' }}>

                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='mt-5'>
                        <h1 className='mt-5'>~ WORLD YOUTH DAY - 2023 ~</h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="mission img" src={worldyouth} className="mt-5 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-5 h-1'>
                        <strong><h3> We had MAGIS LISBON 2023 and World Youth Day in July and August 2023 in Portugal. We were 41 members from JCSA delegation (35 Youth and 6 Jesuits from different Zones). From Our Province, Mr. Aryan Samuel from Ara, Miss. Anisha Anthony from SXCMT and myself went to Portugal. We reached Lisbon on 21 July 2023. On the 23rd we went to Fatima and spent the day there. We had two days program in Lisbon and then we were sent to different places for our Ignatian experiments. I went to Spain for the pilgrimage (walking to Santiago de Compostella). Our two youth were in Portugal for the experiment. Again, we came to Lisbon on 29 July night. On the 31st Fr. General celebrated the Feast Day Eucharistic celebration. On that day evening we ended the MAGIS 2023. Then we began the ‘World Youth Day’ from 1 to 6 August. It was very enriching to see the sea of youth and their faith. We all had wonderful time and experiences.
                            Then we had AICUF national council meeting from 12 to 15 August 2023 in Chennai. Fr. Prakash went to Chennai from Mumbai. Fr. Jeevan took 5 youth from Patna and Varanasi and reached Chennai on the 12th morning. Our youth participated in the meeting enthusiastically. Then Fr. Prakash went to Vijayawada to participate in JYMSA annual meeting. - Prakash Antony
                        </h3></strong>
                    </Row>
                </Container>
                <div>
                    <Row>

                        <img src={youthdown} alt='youthdownpic' className="img-fluid my-5" />
                    </Row>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default YouthMinistry;