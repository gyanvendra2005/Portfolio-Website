import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Bronkoe",
    category: "Client Project · E-Commerce Platform",
    isClient: true,
    tools: "React.js · Cloudflare Turnstile · Tailwind CSS · E-Commerce UI",
    desc: "A handcrafted wholesale leather footwear platform featuring wholesale inquiries, custom sizing catalogs, and Cloudflare Turnstile bot verification.",
    image: "/images/bronkoe_preview.png",
    link: "https://bronkoe.in",
  },
  {
    num: "02",
    name: "Toosani",
    category: "Client Project · E-Commerce Platform",
    isClient: true,
    tools: "React.js · Next.js · Responsive Design · User Experience",
    desc: "An e-commerce website developed as a complete digital storefront, focused on product discovery, elegant presentation, and smooth purchasing experience.",
    image: "/images/toosani_preview.jpg",
    link: "https://toosani.com",
  },
  {
    num: "03",
    name: "Bala Fitness Equipments",
    category: "Selected Project · Business Concept",
    isClient: false,
    tools: "React.js · Responsive UI · Product Showcase · Branding",
    desc: "A modern website concept created for a fitness equipment business to help customers discover products, understand the brand, and submit quote enquiries.",
    image: "/images/bala_preview.png",
    link: "https://bala-enterprises.vercel.app/",
  },
  {
    num: "04",
    name: "Modern Maharani Store",
    category: "Selected Project · Online Store Experience",
    isClient: false,
    tools: "MERN Stack · Next.js · Shopping Cart · Product UI",
    desc: "A responsive e-commerce storefront for luxury designer collections featuring dynamic product grids, smooth filtering, and an intuitive checkout flow.",
    image: "/images/ecommerce_preview.png",
    link: "https://e-commerce-topaz-phi-88.vercel.app/",
  },
  {
    num: "05",
    name: "Jewellery Brand Website",
    category: "Selected Project · Luxury Brand Showcase",
    isClient: false,
    tools: "React.js · Luxury UI · Responsive Design · Branding",
    desc: "A premium-style jewellery website concept designed around elegant product presentation, refined typography, and high-conversion luxury brand experience.",
    image: "/images/jewellery_preview.png",
    link: "https://jewllery-navy.vercel.app/",
  },
  {
    num: "06",
    name: "School Website Portal",
    category: "Selected Project · Educational Institution",
    isClient: false,
    tools: "React.js · Information Architecture · Responsive Design · UI",
    desc: "A modern school website concept designed to organize academics, facilities, campus activities, student achievements, and notices for parents.",
    image: "/images/school_preview.png",
    link: "https://school-nine-bice-21.vercel.app/",
  },
  {
    num: "07",
    name: "CMPS Modern School",
    category: "Selected Project · School Web Experience",
    isClient: false,
    tools: "Frontend Development · Content Structure · UI/UX",
    desc: "Structured educational web platform demonstrating clean institutional information architecture, accessible notice sections, and seamless mobile responsiveness.",
    image: "/images/cmps_preview.png",
    link: "https://cmps-nu.vercel.app/",
  },
  {
    num: "08",
    name: "Real-Time Chat & Video Calling",
    category: "Full-Stack & WebRTC Application",
    isClient: false,
    tools: "Next.js · Node.js · Socket.IO · Redis · MongoDB · WebRTC",
    desc: "Scalable messaging platform supporting 1000+ active users with instant group chat, presence tracking, and WebRTC video calling powered by Redis Pub/Sub.",
    image: "/images/chat_app_preview.jpg",
    link: "https://github.com/gyanvendra2005",
  },
  {
    num: "09",
    name: "Multi-Agent RAG Assistant",
    category: "AI / LLM Architecture",
    isClient: false,
    tools: "Python · LangGraph · LangChain · Streamlit · FAISS · Gemini",
    desc: "Autonomous multi-agent Retrieval-Augmented Generation system with document embeddings retrieval, agentic routing, and context-aware real-time query answering.",
    image: "/images/rag_assistant_preview.jpg",
    link: "https://github.com/gyanvendra2005",
  },
];

const Work = () => {
  useGSAP(() => {
    const getScrollAmount = () => {
      const boxes = document.querySelectorAll<HTMLElement>(".work-box");
      const container = document.querySelector<HTMLElement>(".work-container");
      if (!boxes.length || !container) return 3000;

      const boxWidth = boxes[0].offsetWidth;
      const totalWidth = boxWidth * boxes.length;
      const containerWidth = container.clientWidth;
      return Math.max(0, totalWidth - containerWidth + 80);
    };

    const scrollAmount = getScrollAmount();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${scrollAmount}`,
        scrub: 1,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -scrollAmount,
      ease: "none",
    });

    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    const images = document.querySelectorAll(".work-section img");
    images.forEach((img) => {
      img.addEventListener("load", handleRefresh);
    });

    const timer = setTimeout(handleRefresh, 500);

    return () => {
      clearTimeout(timer);
      images.forEach((img) => {
        img.removeEventListener("load", handleRefresh);
      });
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((proj) => (
            <div className="work-box" key={proj.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{proj.num}</h3>
                  <div>
                    <h4>{proj.name}</h4>
                    <p>
                      {proj.isClient && (
                        <span
                          style={{
                            display: "inline-block",
                            background: "rgba(170, 66, 255, 0.2)",
                            color: "#c481ff",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "1px",
                            marginRight: "6px",
                            textTransform: "uppercase",
                          }}
                        >
                          Client Project
                        </span>
                      )}
                      {proj.category}
                    </p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{proj.tools}</p>
                <p className="work-desc">{proj.desc}</p>
              </div>
              <WorkImage image={proj.image} alt={proj.name} link={proj.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
