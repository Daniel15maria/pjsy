import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import magisCenter from '../images/Prog/prog1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';

const AnimatorPage = () => {
    return (
        <div className=''>
            <div style={{ backgroundColor: '#F6ECDA' }}>
                <Container className='pt-2 d-flex justify-content-center align-items-center'>
                    <Row className='mt-5'>
                        <h1 className='each-subhead2 mt-5 text-center'>YOUTH ANIMATOR TRAINING PROGRAM</h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <Image fluid rounded alt="prog 1 img" src={magisCenter} className="mt-2 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-3 justify-text'>
                        <strong><h4><p>The Patna Jesuit Youth Commission organized “Youth Animators training Program” in Atmadarshan
                            from 31 May to 4 June 2023. Fr. Ashok Kujur SDB was the resource person. There were 16 participants for
                            this training (3 Delhi Jesuits, 2 Kolkata Jesuits, 1 Nepal Jesuit, 2 sisters from SSH and SCN, 1 JYMSA
                            secretary, 7 Patna Jesuits). The program was well appreciated by the participants. We were made aware of
                            the basic skills needed for the youth ministry. The participants suggested that we organize more programs
                            of this kind in the future. On 4 June, we had a practical session in Ara Parish and Kurji Parish. We thank
                            the parish priests and youth in-charges of these parishes for the arrangements.</p></h4></strong>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}


export default AnimatorPage;