import { categories, projects } from '../data/content';
import { Plant } from './Plant';

export function CaseStudy({ slug }: { slug: string }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <section className="container section journal-missing">
        <h1 tabIndex={-1} data-route-heading>
          Project not found
        </h1>
        <p>
          <a href="#projects">Back to projects</a>
        </p>
      </section>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const { journal } = project;
  const categoryLabel = categories.find((category) => category.id === project.category)?.label ?? project.category;

  return (
    <article className="container journal-wrap" aria-labelledby="case-title">
      <a className="back-link" href="#projects">
        ← Back to projects
      </a>

      <div className="journal">
        <header className="journal-head">
          <div>
            <p className="stamp">
              Entry {String(index + 1).padStart(2, '0')} · {project.year} · {categoryLabel}
            </p>
            <h1 id="case-title" tabIndex={-1} data-route-heading>
              {project.title}
            </h1>
            <p className="lede">{project.summary}</p>
          </div>
          <Plant type={project.metaphor} className="journal-plant" />
        </header>

        <ul className="tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <section>
          <h2>Overview</h2>
          <p>{journal.overview}</p>
        </section>

        <section>
          <h2>Approach</h2>
          <ol className="steps">
            {journal.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Outcome</h2>
          <p>{journal.outcome}</p>
        </section>

        <figure className="terminal">
          <div className="terminal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>{journal.snippet.file}</em>
          </div>
          <figcaption className="sr-only">Code snippet from {journal.snippet.file}</figcaption>
          <pre tabIndex={0}>
            <code>{journal.snippet.code}</code>
          </pre>
        </figure>

        <aside className="note">
          <strong>Reflection:</strong> {journal.reflection}
        </aside>

        {(project.live || project.repo) && (
          <p className="project-links">
            {project.live && (
              <a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                View live<span className="sr-only"> (opens in a new tab)</span> ↗
              </a>
            )}
            {project.repo && (
              <a className="button button-ghost" href={project.repo} target="_blank" rel="noopener noreferrer">
                Source code<span className="sr-only"> (opens in a new tab)</span> ↗
              </a>
            )}
          </p>
        )}
      </div>

      <nav className="pager" aria-label="More entries">
        <a href={`#/project/${prev.slug}`}>
          <span>← Previous</span>
          {prev.title}
        </a>
        <a href={`#/project/${next.slug}`}>
          <span>Next →</span>
          {next.title}
        </a>
      </nav>
    </article>
  );
}
