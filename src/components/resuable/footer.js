import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaPhone } from 'react-icons/fa';
import { Person, Envelope, Telephone, Location, Pin } from 'react-bootstrap-icons';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';


export const Footer = () => {
    const navigate = useNavigate();
    return (

        <footer>
            <Container className='py-4'>
                <Row>
                    <Col xs="auto">
                        <div className='d-flex align-items-center justify-content-start'><img src={logo} alt="logo" /></div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start'><h1>PJSYM</h1></div>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={5} sm={12}>
                        <div>
                            <p>The Patna Youth Society, established in 1975, is dedicated to empowering and supporting the youth of Bihar and Uttar Pradesh.
                                Through programs and initiatives focused on personal growth and community engagement,
                                we aim to ignite dynamism and creativity in young individuals, fostering positive change in society.</p>
                            <ul className="social-links">
                                <li><a href="#"><FaFacebook className="fb" /></a></li>
                                <li><a href="#"><FaTwitter className="tw" /></a></li>
                                <li><a href="#"><FaGoogle className="gl" /></a></li>
                                <li><a href="#"><FaInstagram className="ig" /></a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={3} className='d-none d-sm-block'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <ul className="footer-nav footer-navbutton">
                                <li><button onClick={() => navigate('/')}>Home</button></li>
                                <li><button onClick={() => navigate('/about')}>About us</button></li>
                                <li><button onClick={() => navigate('/programs')}>programs</button></li>
                                <li><button onClick={() => navigate('/heros')}>Heroes</button></li>
                                <li><button onClick={() => navigate('/gallery')}>Gallery</button></li>
                                <li><button onClick={() => navigate('#!')}>Contact Us</button></li>
                                <li><button className="footer-navbutton footer-nav" onClick={() => navigate('/donate')}>Donate Us</button></li>
                            </ul>
                        </div>

                    </Col>
                    <Col lg={4} sm={12}>
                        <div>
                            <ul class="footer-nav">
                                <li><Person />Fr. JOYSON FERNANDES SJ</li>
                                <li><Telephone /> +91 9871528965</li>
                                <li><Telephone />+91 9939447576</li>
                                <br></br>
                                <li>Provincial Residence,</li>
                                <li> St. Xavier's - West Gandhi Maidan,</li>
                                <li> Patna – 800 001</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>Copyright &copy; 2024 pjsym All Rights Reserved.</p>
                </Row>
            </Container>
        </footer>
    )
};