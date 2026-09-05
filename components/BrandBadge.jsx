import {
  SiApacheairflow,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiLinux,
  SiOpenai,
  SiOpencv,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpacy,
  SiWebrtc,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPandas,
  SiSpringboot,
  SiGooglegemini,
  SiPytest,
} from "react-icons/si";

const brands = {
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  "REST APIs": { icon: SiPostman, color: "#FF6C37" },
  "LLM APIs": { icon: SiOpenai, color: "var(--openai-brand)" },
  "AI agents": { icon: SiOpenai, color: "var(--openai-brand)" },
  "Voice processing": { icon: SiWebrtc, color: "#1A73E8" },
  WebRTC: { icon: SiWebrtc, color: "#1A73E8" },
  NLP: { icon: SiSpacy, color: "#09A3D5" },
  "Data processing": { icon: SiApacheairflow, color: "#017CEE" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  Java: { icon: SiOpenjdk, color: "#E76F00" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "Machine learning": { icon: SiScikitlearn, color: "#F7931E" },
  "Computer vision": { icon: SiOpencv, color: "#5C3EE8" },
  "Gemini API": { icon: SiGooglegemini, color: "#8E75B2" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Express: { icon: SiExpress, color: "var(--text)" },
  Pandas: { icon: SiPandas, color: "#9C8EDB" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  pytest: { icon: SiPytest, color: "#0A9EDC" },
};

export default function BrandBadge({ name, compact = false }) {
  const brand = brands[name];
  const Icon = brand?.icon;

  return (
    <span className={`brand-badge${compact ? " is-compact" : ""}`}>
      {Icon && <Icon className="brand-icon" style={{ color: brand.color }} aria-hidden="true" />}
      <span>{name}</span>
    </span>
  );
}
