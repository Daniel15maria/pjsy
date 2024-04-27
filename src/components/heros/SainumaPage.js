
import { Container, Col, Row } from 'react-bootstrap'
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';
import sainuma1 from '../images/Heros/sainuma/sainuma1.png';
import sainuma2 from '../images/Heros/sainuma/sainuma2.png';
import sainuma3 from '../images/Heros/sainuma/sainuma3.png';
import sainuma4 from '../images/Heros/sainuma/sainuma4.png';
import sainuma5 from '../images/Heros/sainuma/sainuma5.png';
import sainuma6 from '../images/Heros/sainuma/sainuma6.png';

const SainumaPage = () => {
    return (
        <div className='justify-text '>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <Col lg={3} className='p-4'>
                        <img src={sainuma1} alt="sainuma img 1" className="img-fluid " />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>
                        <div className='lead py-4'>  <h2>“For those who said, I CANNOT – look at me I CAN and I DID” <br></br> – Sainuma Kumari</h2>
                            <br></br>
                            In the sun-kissed valleys of North-East of India, where ancient traditions wove the fabric of existence, Sainuma Kumari’s story unfold
                            - a symphony of resilience, courage and confidence. Born in a family of seven sisters and one brother, Sainuma was the unexpected note -
                            the girl when a boy was anticipated. Her father, a man shackled by societal norms, saw her as excess baggage. The weight of her existence
                            pressed upon her like monsoon clouds, threatening to drown her spirit.
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
                <Row>
                    <Col lg={6} className='lead py-4'>
                        <div>
                            But destiny had other plans; there appeared Tony Penda, a Jesuit with eyes that held galaxies. His empathy
                            wrapped around Sainuma like a protective cloak. “You can,” he whispered, and those two words became her anthem.
                            Tony was more than a guide; he was a loving father figure who chiseled strength from her fragility. The Society of Jesus,
                            in the form of three Jesuits, extended their hands. Their mission was to uplift souls and nurture minds. They saw Sainuma’s
                            potential—the one strength she possessed - the ability to learn and persevere. They ignited her longing for freedom, stoking the
                            fire to prove that she could defy gravity.
                        </div>
                    </Col>
                    <Col lg={3}>
                        <img src={sainuma2} alt="sainuma img 1" className="img-fluid" style={{ height: '300px' }} />
                    </Col>
                    <Col lg={3}>
                        <img src={sainuma3} alt="sainuma img 1" className="img-fluid" style={{ height: '300px' }} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SainumaPage