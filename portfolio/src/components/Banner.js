import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/riyaback.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";





export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Riya`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
               <div className="d-flex flex-direction-row">
               <div className="linkdin-circle"> <a className="linkdin_link" href="https://www.linkedin.com/in/riya-951964230/"><FaLinkedinIn className="linkdin mt-2 text-center"/></a></div>
               <div className="linkdin-circle ms-2"> <a href="https://github.com/imriya07"><FiGithub className="linkdin mt-2 text-center"/></a></div>
               <div className="linkdin-circle ms-2"> <a href="mailto:riya01022001@gmail.com"><CgMail className="linkdin mt-2 text-center"/></a></div>
               </div>


                  <p className="mt-1">Aspiring Full Stack Developer with a strong foundation in MERN stack technologies, passionate about building scalable web applications and solving real-world problems. Skilled in front-end and back-end development, database management, and API integration. Seeking opportunities to apply my knowledge, enhance my skills, and contribute to innovative projects in a dynamic team environment.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="img-fluid back"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
