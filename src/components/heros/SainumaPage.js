import { Container, Col, Row } from 'react-bootstrap'
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';
import sainuma1 from '../images/Heros/sainuma/sainuma1.png';
import sainuma2 from '../images/Heros/sainuma/sainuma2.png';
import sainuma3 from '../images/Heros/sainuma/sainuma3.png';
import sainuma4 from '../images/Heros/sainuma/sainuma4.png';
import sainuma5 from '../images/Heros/sainuma/sainuma5.png';
import sainuma6 from '../images/Heros/sainuma/sainuma6.png';
import sainuma7 from '../images/Heros/sainuma/sainuma7.png';
const SainumaPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <div className='each-head text-center my-3' >
                        SAINUMA’s Symphony: From Burden to Beacon
                    </div>
                    <Col lg={3} className='p-4 d-flex align-items-center justify-content-center'>
                        <img src={sainuma1} alt="sainuma img 1" className="img-fluid" />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>
                        <div className='lead py-4'>
                            <h2>“For those who said, I CANNOT – look at me I CAN and I DID” <br /> – Sainuma Kumari</h2>
                            <br />
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
                    <Col lg={6} className='lead py-4 d-flex align-items-center justify-content-center'>
                        <div>
                            But destiny had other plans; there appeared Tony Penda, a Jesuit with eyes that held galaxies. His empathy
                            wrapped around Sainuma like a protective cloak. “You can,” he whispered, and those two words became her anthem.
                            Tony was more than a guide; he was a loving father figure who chiseled strength from her fragility. The Society of Jesus,
                            in the form of three Jesuits, extended their hands. Their mission was to uplift souls and nurture minds. They saw Sainuma’s
                            potential—the one strength she possessed - the ability to learn and persevere. They ignited her longing for freedom, stoking the
                            fire to prove that she could defy gravity.
                        </div>
                    </Col>
                    <Col lg={3} className='d-flex align-items-center justify-content-center'>
                        <img src={sainuma2} alt="sainuma img 1" className="img-fluid" style={{ height: '300px' }} />
                    </Col>
                    <Col lg={3} className='d-flex align-items-center justify-content-center'>
                        <img src={sainuma3} alt="sainuma img 1" className="img-fluid" style={{ height: '300px' }} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4} className='p-4 d-flex align-items-center justify-content-center'>
                        <img src={sainuma4} alt="sainuma img 1" className="img-fluid" />
                    </Col>

                    <Col lg={8}>
                        <div className='lead py-5 px-2'>
                            The plan unfolded. Sainuma taught 15 to 20 children; her voice weaving dreams into their hearts.
                            For six to seven years, she balanced between studies and mentoring. The classroom became her sanctuary,
                            where she sculpted futures while shaping her own. Transitional moments bloomed. Counselling sessions were her
                            compass that guided her through storms of self-doubt. Macro-level care enveloped her, while micro-level lessons
                            taught her resilience. Dancing and music became her secret gardens where she blossomed. The platform beneath
                            her feet whispered, ‘Realize your worth’.
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className='lead p-3'>
                        In the meantime, challenges loomed; proposals arrived like moths drawn to her beauty. But Sainuma resisted. Marriage wasn’t her destiny but liberation was. She defied norms, refusing to be a pawn in society’s game. And then, there was a transformation. From a timid soul to a beacon of hope. Hopeless whispers became anthems of courage. She donned the nurse’s uniform, stitching wounds with compassion. The children she mentored multiplied - five more souls dancing to her rhythm.
                        From forested hills to New Delhi’s bustling streets, Sainuma’s journey echoed. She was no longer a burden; she was a symphony - a testament to love, resilience, and the power of “YOU CAN.” In her eyes, galaxies sparkled - the legacy of Tony Penda and the Jesuits who believed in her. Sainuma Kumari - the girl who defied gravity, who spun hope from threads of despair. Her brand? A beacon for every forgotten note, whispering, “YOU CAN.”
                    </div>

                </Row>
                <Row>
                    <Col lg={4}><img src={sainuma5} alt="sainuma img 1" className="img-fluid" />
                    </Col>
                    <Col lg={4}><img src={sainuma6} alt="sainuma img 1" className="img-fluid" />
                    </Col>
                    <Col lg={4}><img src={sainuma7} alt="sainuma img 1" className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                    </Col>
                    <Col lg={10}>
                        <div className='lead px-1 text-center mb-5 mt-2'>
                            <h5>Sainuma says, “The path was not easy and many said I CANNOT and I say today, look at me I CAN and I DID with the little help and constant encouragement. If I can – many others can too”.
                            </h5> </div>
                    </Col>
                    <Col lg={1}>
                    </Col>

                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SainumaPage;
