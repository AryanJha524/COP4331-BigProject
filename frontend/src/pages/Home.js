import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from 'react-bootstrap';

export default function Home()
{
    return (
        <Container fluid style={{ backgroundColor: 'gold'}}>
            <Row>
                <Col md={12}>
            <header className="HeaderHomePage">
                <h1> Smart Park</h1>
            </header>

            <Button variant="primary" size="lg" block>
                Login
            </Button>
            <Button variant="secondary" size="lg" block>
                Register
            </Button>
              </Col>
            </Row>
        </Container>
    );

}

