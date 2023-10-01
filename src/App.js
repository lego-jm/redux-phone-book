import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div>
      <h1 className="title">Phone-book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
