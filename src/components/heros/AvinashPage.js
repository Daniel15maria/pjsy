import { Container, Row, Col } from 'react-bootstrap';
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';
import '../../index.css';

const AvinashPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container><Row>AvinashPage
            </Row></Container>

            <Footer />
        </div>
    )
}

export default AvinashPage;