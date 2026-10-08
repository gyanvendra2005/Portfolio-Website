import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              GYANVENDRA
              <br />
              <span>SINGH</span>
            </h1>
            <p className="landing-tagline">
              Building modern web experiences that are fast, functional, and built to solve real problems.
            </p>
          </div>
          <div className="landing-info">
            <h3>Full-Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
            <div className="landing-actions">
              <a href="#work" className="landing-cta-btn primary" data-cursor="disable">
                View My Work <span>→</span>
              </a>
              <a href="#contact" className="landing-cta-btn secondary" data-cursor="disable">
                Let's Work Together <span>↗</span>
              </a>
            </div>
            <p className="landing-credibility">MERN STACK · SOCKET.IO · WEBRTC · AWS · REST APIs</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
