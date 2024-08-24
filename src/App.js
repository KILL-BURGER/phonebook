import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
    return (
        <div>
            <h1 className='title'>연락처</h1>
            <Container>
                <Row className='main-box'>
                    <Col xs={12} md={6}>
                        <ContactForm />
                    </Col>
                    <Col xs={12} md={6}>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
