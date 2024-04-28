import React from 'react'
import '../../index.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import missimg from '../images/mission.png'
import visimg from '../images/vission.png'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const upvariants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

export const MissionVission = () => {
    const navigate = useNavigate();
    return (
        <section style={{ backgroundColor: '#F6ECDA' }} className="d-flex align-items-center justify-content-center">
            <motion.div variants={upvariants} initial="initial" whileInView="animate">
                <Container>
                    <Row className='justify-content-start'>

                        <div className='each-head2'>Mission</div>

                    </Row>
                    <Row className=''>

                        <Col lg={8} className='h5'>
                            <p>To continue the mission of Jesus Christ among the youth, rooted and grounded in His love,
                                striving to empower the youth, especially the unorganized youth, and lend support to youth
                                movements by harnessing their potentialities. We accompany them in the process of understanding
                                and responding to the existing realities of our land in a constructive way, igniting the fire of
                                dynamism, creativity, and search for meaningfulness in life based on Gospel values. Our goal is to
                                build a just, humane, and ecologically sensitive society.</p>
                            <Button variant="primary mt-2" onClick={() => navigate('/about/#vission')}><strong>Read More</strong> <FaArrowRight className='ms-1 mb-1' /></Button>
                        </Col>
                        <Col lg={4}><img className='img-fluid d-none d-sm-none d-md-none d-lg-block' alt="mission img" src={missimg} /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-end'>
                        <Col lg={4}>
                        </Col>
                        <Col lg={8}>
                            <div className='each-head2'>Vision</div>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center align-items-center'  >
                        <Col lg={4} className='d-flex justify-content-center align-items-center' >
                            <Image fluid src={visimg} />
                        </Col>
                        <Col lg={8} className='h5'>
                            <p>The mission of the Patna Jesuits is to empower the youth, especially the unorganized youth,
                                by accompanying them in understanding and responding to the existing realities of our land.
                                We strive to harness their potentialities, ignite their fire for dynamism and creativity, and
                                guide them in living out Gospel values. Through our work, we aim to build a just, humane, and
                                ecologically sensitive society.</p>

                            <Button variant="primary" onClick={() => navigate('/about#vission')}><strong>Read More</strong> <FaArrowRight className='ms-1 mb-1' /></Button>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </section>
    );
}
