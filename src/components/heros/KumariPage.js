import herosbg from '../images/herosimg.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';
import kumari1 from '../images/Heros/kumari/kumari6.jpg';
import kumari2 from '../images/Heros/kumari/kumari1.jpg';
import kumari3 from '../images/Heros/kumari/kumari2.jpg';
import kumari4 from '../images/Heros/kumari/kumari3.jpg';
import kumari5 from '../images/Heros/kumari/kumari4.jpg';
import kumari6 from '../images/Heros/kumari/kumari5.jpg';
import kumari7 from '../images/Heros/kumari/kumari7.jpg';
import { Footer } from '../resuable/footer';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const KumariPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <div className='each-head text-center my-3' >
                        LOVELY KUMARI’s Journey: From Fragility to Strength
                    </div>
                    <Col lg={4}></Col>
                    <Col lg={8}><h2>“The warmth of parental love eluded her” </h2></Col>


                    <Col lg={4} className='p-2 d-flex align-items-center justify-content-center'>
                        <img src={kumari1} alt="kumari img" className="img-fluid" />
                    </Col>
                    {/* <Col lg={1}></Col> */}
                    <Col lg={8}>
                        <div className='lead py-4'>


                            <strong> Lovely Kumari’s life began in the shadows of adversity. Born into a broken family, she lost her mother at a tender age, leaving her unwanted and vulnerable. Her father’s rejection and her stepmother’s indifference further compounded her struggles; yet, amidst the chaos, two pillars of support emerged: her grandmother and later her uncle.
                                The community they belonged to adhered strictly to the caste system, where Lovely’s Catholic faith also set her apart. She was a girl without parental backing, navigating poverty’s harsh currents. But her grandmother’s protective cocoon kept her from discovering her true self. Fear clung to her like a shadow, stifling her potential.
                                Then, fate intervened. Sister Jessy, a Canossian nun, along with two other Jesuit priests stepped into Lovely’s life. With empathy and unwavering commitment, Sister Jessy and Fathers Jesuraj SJ and Joyson SJ became her beacon. Financially and morally, they lifted Lovely’s spirit, accompanying her through every twist and turn. In those moments, they were more than a guide; she was a motherly presence, nurturing Lovely’s dreams.
                                The religious social action structure provided a path for Lovely’s upliftment. A youth animation program ignited her confidence, urging her to stand independently.</strong>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
                <Row>
                    <Col lg={6} className='lead py-4 d-flex align-items-center justify-content-center'>
                        <div>
                            <strong>
                                Nursing, however, wasn’t her initial choice. The hospital walls became her classroom, and medical care her curriculum. The caste system had earmarked her for midwifery, but Lovely defied those boundaries. She broke free from societal norms, embracing the noble profession of nursing.
                                Challenges persisted. Her father, though employed, remained distant. Poverty and social structures threatened her resolve. Internally, she grappled with fragility - a consequence of being overprotected. The warmth of parental love eluded her. </strong>

                        </div>
                    </Col>
                    <Col lg={3} className='d-flex align-items-center justify-content-center'>
                        <img src={kumari2} alt="kumari img 2" className="img-fluid" style={{ height: '320px' }} />
                    </Col>
                    <Col lg={3} className='d-flex align-items-center justify-content-center'>
                        <img src={kumari3} alt="avinash img 2" className="img-fluid" style={{ height: '320px' }} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4} className='p-4 d-flex align-items-center justify-content-center'>
                        <img src={kumari5} alt="kumari img 1" className="img-fluid" />
                    </Col>

                    <Col lg={8}>
                        <div className='lead py-5 px-2'>
                            <strong> Yet, Lovely was transformed. From a timid girl, she emerged as a liberated force. Her voice, once silenced, now echoed through the hospital corridors. She stood tall, a testament to resilience. The fragile bud had blossomed into a strong, compassionate nurse - a beacon of hope for others. Lovely Kumari’s journey wasn’t just about overcoming odds; it was about rewriting her narrative. In the quiet moments, she whispers gratitude to the Jesuits and Sister Jessy, the woman who believed in her when the world turned away. And as she tended the patients, Lovely knew that her transformation was a tribute to love, faith, and the unwavering spirit within her. </strong>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h4 className='text-center'>The Beautiful Times Of Lovely Kumari </h4>
            <Container>
                <Row style={{ height: '680px', overflow: 'hidden' }}>
                    <Col lg={6}><img src={kumari7} alt="avinash img 5" className="img-fluid" />
                    </Col>
                    <Col lg={6}><img src={kumari6} alt="avinash img 6" className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}>
                    </Col>
                    <Col lg={10}>
                        <div className='lead px-1 text-center mb-5 mt-2'>
                            <h5>In the quiet of night,She continues her transforming career while pursuing her degree – she works and convinced to uplift girls like her.
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

export default KumariPage;