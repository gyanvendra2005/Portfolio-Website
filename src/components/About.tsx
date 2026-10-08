import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I build with curiosity, solve with code. Turning ideas into fast, responsive, and functional digital experiences.
        </p>
        <div className="about-details">
          <p className="about-bio">
            I'm Gyanvendra Singh, a Web Developer currently working at Abacus Desk, where I contribute to modern web applications using technologies including Socket.io, WebRTC, and AWS. Alongside my professional experience, I've worked on full-stack applications and client projects ranging from e-commerce platforms to business websites and custom web solutions.
          </p>
          <p className="about-bio" style={{ marginTop: "12px" }}>
            I enjoy taking an idea from concept → development → deployment, with a focus on creating web experiences that are not only visually clean but also reliable, performant, and built to solve real-world problems.
          </p>
          <div className="about-edu">
            <span>🎓 B.Tech in Information Technology (CGPA: 8.0/10)</span>
            <span>Dr. A.P.J. Abdul Kalam Technical University, Lucknow (2023 – 2027)</span>
          </div>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <h4>02+</h4>
              <p>Client Projects</p>
            </div>
            <div className="about-stat-card">
              <h4>02+</h4>
              <p>Professional Roles</p>
            </div>
            <div className="about-stat-card">
              <h4>07+</h4>
              <p>Selected Web Projects</p>
            </div>
            <div className="about-stat-card">
              <h4>2027</h4>
              <p>Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
