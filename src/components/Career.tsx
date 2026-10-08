import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Abacus Desk · Faridabad, Haryana</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to modern web applications and production backend services using Socket.io, WebRTC, and AWS. Configured and optimized Cloudflare security features including rate limiting, firewall rules, caching, and traffic filtering. Engineered DDoS mitigation and bot protection using Cloudflare WAF and implemented Google reCAPTCHA to stop automated spam.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer Intern</h4>
                <h5>IT Jobxs · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed an end-to-end full-stack E-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering product catalogs, shopping cart, and order workflows. Built user authentication & verification systems to eliminate bot accounts, and resolved backend spam registration vulnerabilities with Google reCAPTCHA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in IT & 100xDevs Certification</h4>
                <h5>AKTU (Lucknow) · 100xDevs</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech in Information Technology at Dr. A.P.J. Abdul Kalam Technical University (2023–2027) with an 8.0/10 CGPA. Certified in Full-Stack Development by 100xDevs. Solved 400+ Data Structures and Algorithms problems across coding platforms with an 1800+ rating on LeetCode. Class XII: 94.8% · Class X: 90.4%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
