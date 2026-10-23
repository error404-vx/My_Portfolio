import { profile } from '../data/content';
import { useTheme } from '../hooks/useTheme';

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'game', label: 'Play' },
  { id: 'exploring', label: 'Interests' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const { dark, toggle } = useTheme();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#/" aria-label={`${profile.name}, home`}>
          <span className="brand-mark" aria-hidden="true">SS</span>
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="theme-toggle" aria-pressed={dark} onClick={toggle}>
          <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
          {dark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </header>
  );
}
