import { Typography } from "@mui/material";
import React from "react";

import { Email, GitHub, LinkedIn } from "@mui/icons-material"; // Import MUI icons
import { useColor } from "../contexts/ColorContext";

interface LinkTypes {
  title: string;
  links: { name: string; url: string; sectionId?: string; icon?: React.FC }[]; // Made icon optional
}

const QuickLinks: React.FC<LinkTypes> = ({ title, links }) => {
  const { color } = useColor();

  const handleLinkClick = (link: { url: string; sectionId?: string }) => {
    if (link.sectionId) {
      const section = document.getElementById(link.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
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
          className="flex items-center gap-2 cursor-pointer" // Flexbox for alignment
        >
          {link.icon && <link.icon sx={{ color: `${color.textColor}` }} />}{" "}
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
