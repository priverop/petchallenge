import { Row, Col, Container, Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <section id="Footer">
    <Container>
      <Row>
        <Col className="text-center">
          <Row>
            <Col>
              <h3 className="pt-5 main-color">Woofder!</h3>
              <h6> Find your perfect partner today</h6>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink href="#">Terms of Use</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Privacy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Cookie Policy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Jobs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contact</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Footer;
