import React from "react";
import QuickLinks from "../components/QuickLinks";
import { Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material"; // Import MUI icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info"; // Often used for 'About'
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description"; // Commonly used for 'Resume'

import DiscordIcon from "../assets/svg/discordIcon.svg";
import { useColor } from "../contexts/ColorContext";

const Footer = () => {
  const { color } = useColor();

  const quickLinks = [
    { name: "Home", url: "/", sectionId: "homeSection", icon: HomeIcon },
    { name: "About", url: "/about", sectionId: "aboutSection", icon: InfoIcon },
    { name: "Works", url: "https://example.com", icon: WorkIcon },
    {
      name: "Resume",
      url: "/about",
      sectionId: "aboutSection",
      icon: DescriptionIcon,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "/about",
      sectionId: "aboutSection",
      icon: LinkedIn,
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: () => (
        <img
          src={DiscordIcon}
          alt="Discord"
          style={{ width: "24px", height: "24px", color: "black" }}
        />
      ),
    },
    { name: "Github", url: "https://github.com/Aravindh6122001", icon: GitHub },
    { name: "Gmail", url: "/", sectionId: "homeSection", icon: Email },
  ];

  const title =
    "The Evolution of Full Stack Development: Simplifying Complexity";

  const description = `Explore how full stack development has transformed, emphasizing streamlined workflows and integrated technologies. This evolution simplifies building dynamic applications, enabling developers to \
  focus on innovation and user experience in a rapidly changing digital landscape.`;

  return (
    <div
      className="flex flex-wrap justify-around items-center p-5 pt-10"
      style={{ backgroundColor: `${color.bgColor}` }}
    >
      <div className="flex flex-col justify-center gap-3 w-[400px]">
        <Typography variant="h6" fontWeight={600} color={`${color.textColor}`}>
          {title}
        </Typography>
        <Typography variant="body2" color={`${color.textColor}`}>
          {description}
        </Typography>
      </div>
      <div className="w-[25%]">
        <QuickLinks title="QuickLinks" links={quickLinks} />
      </div>
      <div className="w-[25%]">
        <QuickLinks title="SocialLinks" links={socialLinks} />
      </div>
    </div>
  );
};

export default Footer;
