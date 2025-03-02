import React from "react";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import gitImage from "../assets/img/git.jpg";
import freecodecampImage from "../assets/img/freecodecamp.png";
import versionImage from "../assets/img/version.jpg";
import { Card, Container, Row, Col } from "react-bootstrap";

export const Certifications = () => {
  return (
    <section className="skill" id="certifications">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <div className="skill-bx wow zoomIn">
              <h2>Certifications</h2>
              <p className="mb-4">
                Every certification is a milestone in my journey of continuous
                learning and growth.
              </p>
              <Row className="mt-4">
                <Col md={4} sm={6} xs={12} className="mb-3">
                  <Card className="h-100 text-center">
                    <Card.Img variant="top" src={gitImage} alt="Certification 1" />
                    {/* <Card.Body>
                      <Card.Title>Certification 1</Card.Title>
                      <Card.Text>
                        Details about the first certification.
                      </Card.Text>
                    </Card.Body> */}
                  </Card>
                </Col>
                <Col md={4} sm={6} xs={12} className="mb-3">
                  <Card className="h-100 text-center">
                <Card.Img variant="top" className="object-fit-cover" src={freecodecampImage} alt="Certification 2" style={{ height: "250px" }}  />
                    {/* <Card.Body>
                      <Card.Title>Certification 2</Card.Title>
                      <Card.Text>
                        Details about the second certification.
                      </Card.Text>
                    </Card.Body> */}
                  </Card>
                </Col>
                <Col md={4} sm={6} xs={12} className="mb-3">
                  <Card className="h-100 text-center">
                    <Card.Img variant="top" src={versionImage} alt="Certification 3" />
                    {/* <Card.Body>
                      <Card.Title>Certification 3</Card.Title>
                      <Card.Text>
                        Details about the third certification.
                      </Card.Text>
                    </Card.Body> */}
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Certifications;