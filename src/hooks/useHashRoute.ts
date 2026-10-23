import { useEffect, useState } from 'react';

export type Route = { name: 'home' } | { name: 'project'; slug: string };

function parse(hash: string): Route {
  const match = /^#\/project\/([\w-]+)$/.exec(hash);
  return match ? { name: 'project', slug: match[1] } : { name: 'home' };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
