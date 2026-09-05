// Fixed seeds keep the particle field consistent across server renders.
const particles = Array.from({ length: 32 }, (_, index) => ({
  left: `${3 + (index * 37.17) % 94}%`,
  top: `${15 + (index * 23.61) % 74}%`,
  "--particle-size": `${2 + (index % 3) * 0.7}px`,
  "--particle-opacity": 0.4 + (index % 4) * 0.1,
  "--drift-x": `${(index % 2 === 0 ? 1 : -1) * (24 + (index % 5) * 12)}px`,
  "--drift-y": `${-45 - (index % 6) * 14}px`,
  "--float-duration": `${20 + (index % 7) * 3}s`,
  "--float-delay": `${-index * 3.7}s`,
}));

export default function InteractiveBackground() {
  return (
    <div className="interactive-background" aria-hidden="true">
      <div className="background-grid" />
      <div className="background-particles">
        {particles.map((style, index) => (
          <span
            key={index}
            className={`background-particle${index % 3 === 0 ? " particle-accent" : ""}${index % 7 === 0 ? " particle-soft" : ""}`}
            style={style}
          />
        ))}
      </div>
      <div className="background-traces">
        <span className="background-trace trace-horizontal trace-one" />
        <span className="background-trace trace-horizontal trace-two" />
        <span className="background-trace trace-vertical" />
      </div>
      <div className="background-wash" />
    </div>
  );
}
