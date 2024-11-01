import { Typography } from "@mui/material";
import React from "react";

import { Email, GitHub, LinkedIn } from "@mui/icons-material"; // Import MUI icons
import { useColor } from "../contexts/ColorContext";
import ResumeFile from "../assets/resume/AravindhKrishna_Resume.pdf";

interface LinkTypes {
  title: string;
  links: { name: string; url: string; sectionId?: string; icon?: any }[]; // Made icon optional
}

const QuickLinks: React.FC<LinkTypes> = ({ title, links }) => {
  const { color } = useColor();

  const handleLinkClick = (link: { url: string; sectionId?: string }) => {
    if (!link.sectionId) {
      window.open(link.url, "_blank");
      return;
    }

    if (link.sectionId) {
      const section = document.getElementById(link.sectionId);

      if (link.sectionId === "resume") {
        const link = document.createElement("a");
        link.href = ResumeFile;
        link.download = "AravindhKrishna Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      if (section) {
        const yOffset = window.innerWidth < 768 ? -50 : -10;
        const yPosition =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    } else {
      window.location.href = link.url;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h6" color={`${color.textColor}`} fontWeight={600}>
        {title}
      </Typography>
      {links.map((link, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(link)}
          className="flex items-center gap-2 cursor-pointer "
          style={{ alignItems: "center" }}
        >
          {link.icon && <link.icon style={{ color: `${color.textColor}` }} />}{" "}
          {/* Render icon if exists */}
          <Typography variant="body1" color={`${color.textColor}`}>
            {link.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
