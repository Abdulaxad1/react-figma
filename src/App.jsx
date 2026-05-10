import { useState } from "react";
import "./App.css";

const services = [
  {
    icon: "⌘",
    title: "Data Analytics & Visualization",
    text: "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
  },
  {
    icon: "☼",
    title: "Predictive Analytics and Forecasting",
    text: "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success.",
  },
  {
    icon: "☆",
    title: "Natural Language Processing",
    text: "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age.",
  },
  {
    icon: "☵",
    title: "AI Chatbots",
    text: "From design to deployment, I build AI Chatbots that enhance customer interactions, streamline processes, and elevate your brand's engagement, bringing innovative solutions to your audience's fingertips.",
    wide: true,
  },
  {
    icon: "✥",
    title: "Machine Learning",
    text: "From concept to automation, I craft Machine Learning solutions that decode patterns and optimize performance, driving your business into the era of intelligent automation.",
  },
];

const projects = ["website", "website", "code", "robot", "code", "profile"];

function ProjectImage({ type }) {
  return (
    <div className={`project-image ${type}`}>
      {type === "website" && (
        <>
          <span />
          <b />
          <i />
          <em />
        </>
      )}
      {type === "code" && (
        <pre>{`const model = await ai.train({
  data: insight.stream(),
  epochs: 120,
  metrics: ["f1", "auc"],
});`}</pre>
      )}
      {type === "robot" && <div className="mini-robot" />}
      {type === "profile" && <div className="profile-card" />}
    </div>
  );
}

function App() {
  const [isLight, setIsLight] = useState(false);
  const stopControls = (event) => {
    if (event.target.closest(".submit-btn, .sun-btn")) {
      return;
    }

    if (event.target.closest("button, a")) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <main
      className={isLight ? "portfolio light-theme" : "portfolio"}
      onClickCapture={stopControls}
    >
      <header className="nav">
        <a className="brand" href="#home">
          Georgy
        </a>
        <nav>
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#resume">Resume</a>
        </nav>
        <div className="nav-actions">
          <button className="outline-btn" type="button">
            Contact Me
          </button>
          <button
            className="sun-btn"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setIsLight((current) => !current)}
          >
            ☼
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="grid-glow" />
        <img className="avatar" src="/avatar.png" alt="Georgy avatar" />
        <h1>Georgy Georgy</h1>
        <h2>Data Sorcerer 🧙‍♂️</h2>
        <p>
          As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation
        </p>
        <button className="outline-btn hero-btn" type="button">
          Contact Me
        </button>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <small>Get to know me</small>
        <p>
          Hi there! I'm [Your Name], a data scientist specializing in data
          analytics, predictive modeling, natural language processing, machine
          learning, and AI chatbots. With a passion for unraveling insights from
          complex datasets, I'm dedicated to helping businesses make informed
          decisions and stay ahead in today's data-driven world.
        </p>
        <p>
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it's
          uncovering hidden patterns, predicting future trends, or automating
          processes with AI, I'm here to help you harness the full potential of
          your data.
        </p>
        <p>
          Let's work together to transform your data into actionable insights
          that drive real results. Get in touch, and let's start unlocking the
          power of your data today!
        </p>
        <a className="outline-btn resume-btn" href="#resume">
          Download Resume
        </a>
      </section>

      <section className="services" id="services">
        <div className="section-title">
          <h2>What I do</h2>
          <small>My Services</small>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article
              className={service.wide ? "service-card wide" : "service-card"}
              key={service.title}
            >
              <div className="service-copy">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              {service.wide && <div className="brain-art" />}
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-title">
          <h2>Projects</h2>
          <small>Some of my Work</small>
        </div>
        <div className="chips">
          <button className="selected">Machine learning</button>
          <button>Sql</button>
          <button>Power BI</button>
          <button>AI/LLMs</button>
          <button>Spatial Data Science</button>
        </div>
        <div className="project-grid">
          {projects.map((type, index) => (
            <article className="project-card" key={`${type}-${index}`}>
              <ProjectImage type={type} />
              <div className="project-row">
                <div>
                  <h3>
                    {index > 2
                      ? "Educational Platform"
                      : "Project name/description"}
                  </h3>
                  <p>Web Design / Usability Testing</p>
                </div>
                <a href="#contact" aria-label="Open project">
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <button className="view-btn">View All</button>
      </section>

      <section className="contact" id="contact">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <small>Lets work together</small>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" placeholder="example@email.com" />
          </label>
          <label>
            Email
            <input type="email" placeholder="full name" />
          </label>
          <label>
            Service
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Data Analytics</option>
              <option>Machine Learning</option>
              <option>AI Chatbots</option>
            </select>
          </label>
          <label>
            Message
            <textarea />
          </label>
          <button className="submit-btn" type="submit">Get in Touch</button>
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <h2>
            Let&apos;s
            <br />
            Work Together -
          </h2>
          <a className="mail-pill" href="mailto:Georgy@gmail.com">
            <span>G</span> Georgy@gmail.com
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2023 all rights reserved.</p>
          <div className="socials">
            <a href="#home">in</a>
            <a href="#home">◎</a>
            <a href="#home">f</a>
            <a href="#home">▣</a>
            <a href="#home">𝕏</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
