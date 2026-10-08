import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-subtitle">HAVE A PROJECT IN MIND?</p>
          <h2 className="contact-title">
            Let's build something <span>worth experiencing.</span>
          </h2>
          <p className="contact-subtext">
            Have an idea for a business website, e-commerce platform, or custom web application? Let's turn your vision into a reality.
          </p>
          <a
            href="mailto:gyanvendras2004@gmail.com"
            className="contact-cta-btn"
            data-cursor="disable"
          >
            Start a Conversation <MdArrowOutward />
          </a>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:gyanvendras2004@gmail.com" data-cursor="disable">
                gyanvendras2004@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916396491411" data-cursor="disable">
                +91 6396491411
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>Kanpur, Uttar Pradesh, India</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social & Code</h4>
            <a
              href="https://github.com/gyanvendra2005"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/gyanvendra2004"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/gyanvendra_2005"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume PDF <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed & Developed <br /> by <span>Gyanvendra Singh</span>
            </h2>
            <p className="contact-role-caption">Full-Stack Web Developer</p>
            <h5>
              <MdCopyright /> 2026 Gyanvendra Singh. Built with code & curiosity.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
