import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

export const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container className="mb-5">
        <Row className="align-items-center text-center text-sm-start mb-5 mt-5">
          {/* Logo Section */}
          <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start mb-3 mb-sm-0">
            <h1>Riya</h1>
          </Col>

          {/* Social Icons Section */}
          <Col xs={12} sm={6} className="text-center text-sm-end mt-3 mt-sm-0">
            <div className="d-flex justify-content-center justify-content-sm-end gap-1">
            <div className="linkdin-circle"> <a className="linkdin_link" href="https://www.linkedin.com/in/riya-951964230/"><FaLinkedinIn className="linkdin mt-2 text-center"/></a></div>
               <div className="linkdin-circle ms-2"> <a href="https://github.com/imriya07"><FiGithub className="linkdin mt-2 text-center"/></a></div>
               <div className="linkdin-circle ms-2"> <a href="mailto:riya01022001@gmail.com"><CgMail className="linkdin mt-2 text-center"/></a></div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
