import { useState } from 'react';
import { categories, projects, type Category, type Project } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import { Plant } from './Plant';

type Filter = 'all' | Category;

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article ref={ref} className={`card reveal tone-${project.category}`}>
      <div className="card-art">
        <Plant type={project.metaphor} />
      </div>
      <p className="card-meta">
        {project.category === 'ai' ? 'AI' : project.category} · {project.year}
      </p>
      <h3>
        <a className="card-link" href={`#/project/${project.slug}`}>
          {project.title}
        </a>
      </h3>
      <p>{project.summary}</p>
      <p className="metaphor">{project.projectNote}</p>
      <ul className="tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

export function Garden() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const active = categories.find((c) => c.id === filter);

  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <h2 id="projects-title">Selected projects</h2>
      <p className="section-lede">
        A selection of projects across frontend development, applied AI, and product strategy.
      </p>

      <div className="filters" role="group" aria-label="Filter projects">
        {[{ id: 'all' as const, label: 'All' }, ...categories].map((c) => (
          <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      {active && (
        <p className="filter-note" role="status">
          {active.blurb}{' '}
          <a href={active.href} target="_blank" rel="noopener noreferrer">
            More {active.label.toLowerCase()} work on GitHub<span className="sr-only"> (opens in a new tab)</span> ↗
          </a>
        </p>
      )}

      <div className="grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
