import { exploring, profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Exploring() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="exploring" className="section container" aria-labelledby="exploring-title">
      <div ref={ref} className="exploring reveal">
        <h2 id="exploring-title">Current interests</h2>
        <p className="section-lede">Topics and activities I am currently spending time on.</p>
        <dl className="exploring-list">
          {exploring.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section id="about" className="about" aria-labelledby="about-title">
        <h2 id="about-title">About me</h2>
        <p>
          I am {profile.name}. I’m a Software Engineer passionate about building scalable applications, solving complex problems, and creating intuitive user experiences. With a strong foundation in modern web technologies, I’m exploring AI Application Engineering to build smarter digital solutions and applying Product Management principles to understand user needs, align technology with business goals, and create products that deliver meaningful impact.

<br></br><br></br>I’m a curious and enthusiastic learner who enjoys exploring new technologies, expanding my skill set, and turning knowledge into practical solutions. I believe in continuous learning, experimenting with new ideas, and implementing what I learn to build better products, improve experiences, and grow as an engineer.
        </p>
        <div className="whoami-card" aria-label="Samiya Shaikh's areas of expertise">
          <div className="whoami-card-head">
            <span className="whoami-mark" aria-hidden="true">✳</span>
            <p>PROFILE <span>·</span> ABOUT</p>
          </div>
          <h3>{profile.name}</h3>
          <dl className="skill-list">
            <div>
              <dt>Engineering</dt>
              <dd>React · TypeScript · JavaScript · SPFx · REST APIs · Microsoft Graph · Azure · CI/CD</dd>
            </div>
            <div>
              <dt>AI &amp; Exploration</dt>
              <dd>LLMs · Generative AI · RAG · Prompt Engineering · AI-powered Applications</dd>
            </div>
            <div>
              <dt>Product &amp; Design</dt>
              <dd>Product Thinking · System Design · UI/UX · Problem Solving · Product Discovery</dd>
            </div>
          </dl>
          <span className="whoami-leaf whoami-leaf-one" aria-hidden="true" />
          <span className="whoami-leaf whoami-leaf-two" aria-hidden="true" />
        </div>
      </section>
    </section>
  );
}
