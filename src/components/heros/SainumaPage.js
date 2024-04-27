
import { Container, Row } from 'react-bootstrap'
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';

const SainumaPage = () => {
    return (
        <div>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <Row>
                    Sainuma Page
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default SainumaPage