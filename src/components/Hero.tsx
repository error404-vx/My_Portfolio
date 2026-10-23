import { profile } from '../data/content';
import portrait from '../styles/samiya_image.jpg';

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="code-chip">{'<hello world />'}</span> {profile.role}
          </p>
          <h1 id="hero-title">
            <span className="hero-name">{profile.name}</span>
            {profile.headline}
          </h1>
          <p className="lede">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
            </a>
            <a className="button button-ghost" href="#contact">
              Say hello
            </a>
          </div>
          <pre className="hero-code" aria-hidden="true">
            <code>
              <span className="tok-key">const</span> focus = <span className="tok-str">'building useful products'</span>;{' '}
              <span className="tok-com">// learn, build, improve</span>
            </code>
          </pre>
        </div>
        <figure className="portrait-placeholder">
          <img src={portrait} alt={profile.name} />
        </figure>
      </div>
    </section>
  );
}
