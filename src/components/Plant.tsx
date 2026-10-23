import type { ReactElement } from 'react';
import type { Metaphor } from '../data/content';

const STEM = 'var(--text)';

function Flower({ x, y, color = 'var(--accent)', size = 5 }: { x: number; y: number; color?: string; size?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy={-size * 0.8}
          rx={size * 0.42}
          ry={size * 0.78}
          fill={color}
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r={size * 0.32} fill="#f5d995" />
    </g>
  );
}

function Leaf({ d }: { d: string }) {
  return <path d={d} fill="var(--sage)" stroke={STEM} strokeWidth="1.5" strokeLinejoin="round" />;
}

function Ground() {
  return <path d="M19 89c16-5 25 3 41 0s29-4 41 0v4H19Z" fill="#d7c6ac" />;
}

const art: Record<Metaphor, ReactElement> = {
  shell: (
    <>
      <Ground />
      <path d="M60 88V51M60 71 43 58M60 67 77 52" fill="none" stroke={STEM} strokeWidth="3" strokeLinecap="round" />
      <Leaf d="M44 59c-10-12-18-8-18-8 4 10 10 14 18 8ZM76 53c9-13 18-10 18-10-3 10-10 15-18 10Z" />
      <Flower x={60} y={45} color="#e8a5b3" size={10} />
      <Flower x={43} y={55} color="#d9d4e8" size={5} />
      <Flower x={78} y={48} color="#f0c4a8" size={5} />
    </>
  ),
  starfish: (
    <>
      <Ground />
      <path d="M60 88V47M60 70 43 56M60 62 78 47" fill="none" stroke={STEM} strokeWidth="3" strokeLinecap="round" />
      <Leaf d="M43 57c-12-10-19-5-19-5 6 9 12 12 19 5ZM78 48c9-12 18-9 18-9-3 10-10 15-18 9Z" />
      <Flower x={60} y={40} color="#edc775" size={12} />
      <Flower x={43} y={54} color="#e99a91" size={4} />
    </>
  ),
  coral: (
    <>
      <Ground />
      <path d="M60 89V61M60 74 42 60V48M60 70 78 55V41M60 66V43" fill="none" stroke={STEM} strokeWidth="3" strokeLinecap="round" />
      <Leaf d="M43 62c-10-8-17-3-17-3 5 8 11 10 17 3ZM78 57c8-10 16-7 16-7-3 9-9 13-16 7Z" />
      <Flower x={42} y={45} color="#d9d4e8" size={5} />
      <Flower x={78} y={38} color="#e8a5b3" size={6} />
      <Flower x={60} y={39} color="#f0c4a8" size={5} />
    </>
  ),
  palm: (
    <>
      <Ground />
      <path d="M59 89c-1-17 1-29 5-43" fill="none" stroke={STEM} strokeWidth="4" strokeLinecap="round" />
      <Leaf d="M64 48C46 36 34 40 27 52c12-5 25-5 37-4ZM64 48c12-18 26-19 37-9-14 1-26 5-37 9ZM64 47c-6-18 0-29 14-34-4 13-8 24-14 34ZM64 47C51 28 39 25 29 30c12 4 24 10 35 17ZM64 47c15-10 28-8 36 2-14-2-25-2-36-2Z" />
      <Flower x={63} y={44} color="#edc775" size={4} />
    </>
  ),
  wave: (
    <>
      <path d="M12 82c12-9 24-8 35-2s22 7 35 1 20-6 26-2v16H12Z" fill="#b6d7cf" />
      <path d="M12 88c16-5 25 3 41 0s37-4 55 1v6H12Z" fill="#d8e7e2" />
      <path d="M43 83V56M80 84V48M88 84V61" fill="none" stroke={STEM} strokeWidth="2.5" strokeLinecap="round" />
      <Leaf d="M44 68c-10-9-17-5-17-5 5 8 11 10 17 5ZM79 60c9-10 17-6 17-6-4 9-10 12-17 6Z" />
      <ellipse cx="61" cy="79" rx="12" ry="4" fill="#a9cbbb" stroke={STEM} strokeWidth="1.5" />
      <Flower x={61} y={74} color="#f3d2dc" size={5} />
    </>
  ),
  lighthouse: (
    <>
      <Ground />
      <path d="M60 88V44M60 73 43 61M60 66 77 55M60 59 48 49" fill="none" stroke={STEM} strokeWidth="2.5" strokeLinecap="round" />
      <Leaf d="M44 62c-10-9-17-5-17-5 5 8 11 10 17 5ZM76 56c9-10 17-6 17-6-4 9-10 12-17 6ZM49 51c-8-8-14-5-14-5 4 7 9 9 14 5Z" />
      <Flower x={60} y={39} color="#c9bddf" size={7} />
      <Flower x={78} y={50} color="#e8a5b3" size={4} />
    </>
  ),
};

export function Plant({ type, className }: { type: Metaphor; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" role="presentation" aria-hidden="true" focusable="false">
      {art[type]}
    </svg>
  );
}
