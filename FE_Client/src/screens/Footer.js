import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import QuickLinks from "../components/QuickLinks";
import { IconButton, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material"; // Import MUI icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info"; // Often used for 'About'
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description"; // Commonly used for 'Resume'
import { useColor } from "../contexts/ColorContext";
import { discord, email, github, linkedin } from "../constants";
import DiscordIcon from "../assets/svg/DiscordIcon";
const Footer = () => {
    const { color } = useColor();
    const quickLinks = [
        { name: "Home", url: "home", sectionId: "home", icon: HomeIcon },
        { name: "About", url: "about", sectionId: "about", icon: InfoIcon },
        { name: "Works", url: "works", sectionId: "works", icon: WorkIcon },
        {
            name: "Resume",
            url: "resume",
            sectionId: "resume",
            icon: DescriptionIcon,
        },
    ];
    const socialLinks = [
        {
            name: "LinkedIn",
            url: linkedin,
            icon: LinkedIn,
        },
        {
            name: "Discord",
            url: discord,
            icon: () => (_jsx(IconButton, { href: discord, target: "_blank", children: _jsx(DiscordIcon, { color: color.textColor }) })),
        },
        { name: "Github", url: github, icon: GitHub },
        { name: "Gmail", url: email, icon: Email },
    ];
    const title = "The Evolution of Full Stack Development: Simplifying Complexity";
    const description = `Explore how full stack development has transformed, emphasizing streamlined workflows and integrated technologies. This evolution simplifies building dynamic applications, enabling developers to \
  focus on innovation and user experience in a rapidly changing digital landscape.`;
    return (_jsxs("div", { className: "flex flex-wrap justify-around items-center p-5 pt-10", style: { backgroundColor: `${color.bgColor}` }, children: [_jsxs("div", { className: "flex flex-col justify-center gap-3 w-[400px]", children: [_jsx(Typography, { variant: "h6", fontWeight: 600, color: `${color.textColor}`, children: title }), _jsx(Typography, { variant: "body2", color: `${color.textColor}`, children: description })] }), _jsx("div", { className: "w-[25%]", children: _jsx(QuickLinks, { title: "QuickLinks", links: quickLinks }) }), _jsx("div", { className: "w-[25%]", children: _jsx(QuickLinks, { title: "SocialLinks", links: socialLinks }) })] }));
};
export default Footer;
