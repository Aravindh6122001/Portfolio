import React from "react";
import ReactLogo from "../assets/svg/react.svg";
import JavaScriptLogo from "../assets/svg/javascript.svg";
import PythonLogo from "../assets/svg/python.svg";
import PostgresLogo from "../assets/svg/postgresql.svg";
import AngularLogo from "../assets/svg/angular.svg";
import fastApiLogo from "../assets/svg/fastapi.svg";
import DjangoLogo from "../assets/svg/django.svg";
import DockerLogo from "../assets/svg/docker.svg";
import XcodeLogo from "../assets/svg/xCode.svg";
import AndroidStudioLogo from "../assets/svg/androidStudio.svg";
import Neo4jLogo from "../assets/svg/neo4j.svg";
import { useColor } from "../contexts/ColorContext";

const skillsData = [
  { Icon: ReactLogo, name: "React" },
  { Icon: JavaScriptLogo, name: "JavaScript" },
  { Icon: PythonLogo, name: "Python" },
  { Icon: PostgresLogo, name: "Postgresql" },
  { Icon: AngularLogo, name: "Angular" },
  { Icon: fastApiLogo, name: "FastApi" },
  { Icon: DjangoLogo, name: "Django" },
  { Icon: DockerLogo, name: "Docker" },
  { Icon: XcodeLogo, name: "XCode" },
  { Icon: AndroidStudioLogo, name: "AndroidStudio" },
  { Icon: Neo4jLogo, name: "Neo4j" },
];

const Skills: React.FC = () => {
  const containerStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
  };

  const scrollAnimation = {
    animation: "scroll 15s linear infinite",
  };

  const { color } = useColor();

  return (
    <div
      className="w-full h-[200px] overflow-hidden relative"
      style={containerStyle}
    >
      <div className="flex" style={scrollAnimation}>
        {/* Rendering the skill cards twice for continuous scroll */}
        {skillsData.concat(skillsData).map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[180px] h-[180px] mx-2 p-5 flex flex-col gap-5 justify-center items-center"
          >
            <img
              src={skill.Icon}
              alt={`${skill.name} logo`}
              className="w-12 h-12"
            />
            <p className="text-lg" style={{ color: `${color.textColor}` }}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Skills;
