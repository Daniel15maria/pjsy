import { Container, Row, Col, Image } from 'react-bootstrap';
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';
import avinash1 from '../images/Heros/avinash/avinash1c.jpg';
import avinash2 from '../images/Heros/avinash/avinash2.jpg';
import avinash3 from '../images/Heros/avinash/avinash3.jpg';
import avinashtop from '../images/Heros/avinash/avinash5.jpg';
import avinash5 from '../images/Heros/avinash/avinash9.jpg';
import avinash6 from '../images/Heros/avinash/avinash4.jpg';
import avinash7 from '../images/Heros/avinash/avinash7.jpg';
import '../../index.css';

const AvinashPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <div className='each-subhead text-center my-3' >
                        Rising from Ashes: The Avinash Mahato Story
                    </div>
                    <div className='quotes-head text-center'>“Avinash’s existence was etched in shadows” </div>
                    <Col lg={4} className='p-2 d-flex align-items-center justify-content-center'>
                        <Image src={avinashtop} alt="avinash img 11" fluid rounded />
                    </Col>
                    <Col lg={8}>
                        <div className='lead pt-4'>
                            <strong><p>In the heart of a forgotten village, where poverty clung to every mud-brick wall, Avinash Mahato’s life unfolded like a tattered scroll. His father, a drunken specter, had sold their ancestral land, leaving the family adrift in a sea of deprivation. His mother, a silent warrior, stitched together their survival with frayed threads of love and resilience.
                                Avinash’s existence was etched in shadows - the forgotten child of a forsaken corner house. The Tharu community, belittled and excommunicated, whispered tales of their misfortune. Yet, within this desolation, a spark flickered - <strong><span style={{ color: "#124076" }}> a hunger for knowledge, a thirst for learning and a desire for escape</span></strong>. There come the Jesuits of Patna Province - their presence like a
                                celestial alignment. Three JESUITS of purpose, their cassocks billowing with hope. They saw Avinash’s
                                potential, hidden beneath rags and hunger. Their plan was audacious: to nurture a boy who wasn’t
                                their kin, who had been robbed of childhood, who clung to the fringes of relevance. The process began
                                - a symphony of mentorship and education. Avinash, studious and ambitious, absorbed knowledge like
                                parched earth after rain. His energy, once scattered, found rhythm - a channeling of purpose.
                                Computers hummed under his fingertips, and Tally sheets danced to his command.</p></strong>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
                <Row className="justify-content-center">
                    <Container className="d-flex align-items-center justify-content-center">
                        <Row className='d-flex align-items-center justify-content-center '>
                            <Col lg={6} md={12} sm={12} xs={12} className='lead pt-lg-3 d-flex align-items-center justify-content-center'>
                                <div>
                                    <strong>
                                        <p>But the agreement weighed heavy. He would halt his own studies, dedicating a year
                                            to service. The center became his sanctuary - a place where bytes and balance sheets intertwined.
                                            Amidst the whir of machines, he discovered more than algorithms; he found himself. Transitional
                                            moments arrived. Avinash faced his father - a man who had abandoned love for liquor. Their
                                            conversations were bridges - rickety but vital. He accepted his mentally handicapped brother,
                                            bridging chasms of disassociation. Healing flowed like monsoon rain, washing away anger and
                                            hurt.
                                        </p>
                                    </strong>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={6} className='mb-2 p-4 d-flex align-items-center justify-content-center'>
                                <Image src={avinash7} alt="avinash img 1" className="img-fluid" rounded />
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={6} className='d-flex p-4 align-items-center justify-content-center'>
                                <Image src={avinash2} alt="avinash img 2" className="img-fluid" rounded />
                            </Col>
                        </Row>
                    </Container>
                </Row>

            </Container>
            <Container className='mb-2'>
                <Row>
                    <Col lg={4} className='px-4 d-flex align-items-center justify-content-center'>
                        <Image src={avinash5} alt="avinash img 1" className="img-fluid" rounded />
                    </Col>

                    <Col lg={8}>
                        <div className='lead px-2  py-2'>
                            <strong>
                                <p>
                                    Challenges loomed. Poverty gnawed at his dreams. The internal battle—the need to prove himself,
                                    to defy failure’s icy grip—threatened to consume him. Yet, he persisted. Fluency in English became
                                    his armor, confidence its sheen. Avinash was transformed—an emotional tempest now a steady ship
                                    navigating life’s tempests.
                                    <br></br>
                                    And so, he pursued M.Com - a beacon of resilience. The boy who once clenched
                                    fists in rage now faced life’s storms with courage. His brand story? It echoed through
                                    the village - a testament to the Society of Jesus, to mentors who believed in more
                                    than textbooks. Avinash Mahato, the phoenix rising from the ashes - carved his legacy.
                                    His footsteps, once hesitant, now imprinted the path for others. Poverty no longer
                                    defined him; it fueled his ascent. And as he balanced ledgers and dreams, he whispered,
                                    <strong><span style={{ color: "#124076" }}>“I am enough”</span>.</strong></p></strong>
                        </div>
                    </Col>
                </Row>
            </Container >
            <div className='text-center mb-3 quotes-headblue'>~ The Motivating Moments Of Avinash Mahato ~</div>
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <Row className="d-flex align-items-center justify-content-center ">
                    <Col lg={4} md={4} sm={4} xs={6} className="d-flex justify-content-center">
                        <Image src={avinash3} fluid rounded alt="avinash Image 5" className=" mb-2" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={6} className="d-flex justify-content-center">
                        <Image src={avinash6} fluid rounded alt="avinash Image 6" className=" mb-2" />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={8} className="d-flex justify-content-center">
                        <Image src={avinash1} fluid rounded alt="avinash img 7" className="img-fluid mb-2" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='quotes-head px-1 text-center mb-4 mt-2 px-lg-5'>
                            <h5>In the quiet of night, the Jesuits watched, a constellation of pride. Avinash’s
                                transformation was their symphony, the notes of grace, resilience, and hope. For,
                                in the heart of a forgotten village, a brand was born - one that defied poverty,
                                embraced vulnerability, and dared to dream.
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
export default AvinashPage;