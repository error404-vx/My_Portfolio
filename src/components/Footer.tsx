import { profile } from '../data/content';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.56 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67V18ZM7 8.23a1.55 1.55 0 1 1 .02-3.1 1.55 1.55 0 0 1-.02 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.22 1.78 3.22 4.1V18Z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <h2>Let&apos;s work together</h2>
          <p>Open to thoughtful frontend, AI and product work.</p>
        </div>
        <div className="footer-contact-row">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Let&apos;s connect
          </a>
          <ul className="social">
            <li>
              <a className="social-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                <span className="social-icon"><GitHubIcon /></span>
                <span className="social-label">GitHub</span>
                <span className="social-arrow" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="social-link" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="social-icon"><LinkedInIcon /></span>
                <span className="social-label">LinkedIn</span>
                <span className="social-arrow" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} {profile.name} · Built with React &amp; TypeScript ·{' '}
        <code>git commit -m &quot;keep improving&quot;</code>
      </p>
    </footer>
  );
}
