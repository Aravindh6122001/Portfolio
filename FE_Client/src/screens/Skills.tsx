import React, { useState } from "react";
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
import JenkinsLogo from "../assets/svg/jenkins.svg";
import { useColor } from "../contexts/ColorContext";
import { useMediaQuery } from "@mui/material";

const skillsData = [
  { Icon: ReactLogo, name: "React" },
  { Icon: JavaScriptLogo, name: "JavaScript" },
  { Icon: PythonLogo, name: "Python" },
  { Icon: PostgresLogo, name: "Postgresql" },
  { Icon: AngularLogo, name: "Angular" },
  { Icon: fastApiLogo, name: "FastApi" },
  { Icon: DjangoLogo, name: "Django" },
  { Icon: DockerLogo, name: "Docker" },
  { Icon: JenkinsLogo, name: "Jenkins" },
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

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const scrollSpeed = isMobile ? "18s" : "11s"; // Set faster scroll speed for mobile
  const { color } = useColor();

  const [isHovered, setIsHovered] = useState(false); // State to manage hover

  return (
    <div
      className={`w-full h-[200px] overflow-hidden relative ${
        isMobile && "mt-16"
      }`}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)} // Set to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set to false on mouse leave
    >
      <div
        className="scroll-container flex"
        style={{
          animation: `scroll ${scrollSpeed} linear infinite`,
          animationPlayState: isHovered ? "paused" : "running", // Control animation state based on hover
          width: isMobile ? "800%" : "100%",
        }}
      >
        {/* Rendering the skill cards twice for continuous scroll */}
        {skillsData.concat(skillsData).map((skill, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              isMobile ? "w-[120px] h-[120px]" : "w-[180px] h-[180px]"
            } mx-2 p-2 flex flex-col gap-2 justify-center items-center`} // Adjusted width and height for mobile
          >
            <img
              src={skill.Icon}
              alt={`${skill.name} logo`}
              className="w-12 h-12"
            />
            <p
              className="text-sm text-center"
              style={{ color: `${color.textColor}` }}
            >
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
            transform: translateX(-50%); /* Adjusted to ensure continuous scrolling */
          }
        }
        .scroll-container {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Skills;
