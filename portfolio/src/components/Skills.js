import meter1 from "../assets/img/reactpic.png";
import meter2 from "../assets/img/node.png";
import meter3 from "../assets/img/express-js.png";
import meter4 from "../assets/img/mongopic.png";
import meter5 from "../assets/img/html.png";
import meter6 from "../assets/img/css.png";
import meter7 from "../assets/img/bootstrap.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in MongoDB, Express.js, React.js, and Node.js, I build dynamic and scalable web applications. I create responsive UIs with React.js, develop efficient APIs with Node.js & Express.js, and manage databases using MongoDB. Skilled in state management, authentication, and deployment, I ensure seamless full-stack development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="mongo" src={meter4} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img className="html-img" src={meter5} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img className="html-img" src={meter6} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img className="boot-img" src={meter7} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
