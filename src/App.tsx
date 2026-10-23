import { useEffect, useRef } from 'react';
import { CaseStudy } from './components/CaseStudy';
import { Exploring } from './components/Exploring';
import { Footer } from './components/Footer';
import { Garden } from './components/Garden';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MindGame } from './components/MindGame';
import { profile } from './data/content';
import { useHashRoute } from './hooks/useHashRoute';

export default function App() {
  const route = useHashRoute();
  const mainRef = useRef<HTMLElement>(null);
  const slug = route.name === 'project' ? route.slug : null;

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = route.name === 'home' && id ? document.getElementById(id) : null;
    const behavior = document.documentElement.dataset.motion === 'on' ? 'smooth' : 'auto';

    if (target) {
      target.scrollIntoView({ behavior });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0 });
      mainRef.current?.querySelector<HTMLElement>('[data-route-heading]')?.focus({ preventScroll: true });
    }
  }, [route, slug]);

  useEffect(() => {
    document.title = slug ? `Project — ${profile.name}` : `${profile.name} — Portfolio`;
  }, [slug]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef}>
        {route.name === 'project' ? (
          <CaseStudy slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Garden />
            <MindGame />
            <Exploring />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
