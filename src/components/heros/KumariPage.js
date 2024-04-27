import herosbg from '../images/herosimg.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';
import { Footer } from '../resuable/footer';

const KumariPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container><Row>Kumari Page
            </Row></Container>
            <Footer />
        </div>
    )
}

export default KumariPage;