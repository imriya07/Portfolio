import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/resturant.jpg";
import projImg2 from "../assets/img/cloudweather.jpg";
import projImg3 from "../assets/img/dataV.jpg";
import projImg4 from "../assets/img/map.jpg";
import projImg5 from "../assets/img/calculator.jpg";
import projImg6 from "../assets/img/login.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Weather App 🌦️",
      description: "Real-time forecasts, always keeping you prepared! ",
      imgUrl: projImg2,
      link: "https://imriya07.github.io/Weather-app/"
    },
    {
      title: "Smart Restaurant Finder 🍽️",
      description: "Discover your perfect meal, instantly! ",
      imgUrl: projImg1,
      link: "https://riyariya.me/"
    },
    {
      title: "Data Visualization 📊",
      description: "See data, get insights, take action! ",
      imgUrl: projImg3,
      link: "https://frontend-nu-wine.vercel.app/"
    },
    {
      title: "Login/Signup  🔐",
      description: "Fast, secure, and hassle-free authentication! ",
      imgUrl: projImg6,
      link: "https://login-app-topaz-delta.vercel.app/"
    },
    {
      title: "Calculator 🔢",
      description: "Smart, fast, and effortless calculations at your fingertips!",
      imgUrl: projImg5,
      link: "https://imriya07.github.io/Calculator/"
    },
    {
      title: "Country Explorer 🌍",
      description: "Discover countries, explore insights, and travel smarter!",
      imgUrl: projImg4,
      link: "https://imriya07.github.io/Country-explorer/"
    }
    
  ];
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Each project is a reflection of my passion for innovation and problem-solving. Through clean code, creativity, and collaboration, I strive to build impactful solutions that make a difference.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Code is more than logic; it’s a tool to create, inspire, and bring ideas to life through technology.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Building projects isn’t just about writing code—it’s about solving problems, learning, and growing with each challenge.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
