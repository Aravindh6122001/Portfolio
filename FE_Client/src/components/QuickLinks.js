import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "@mui/material";
import { useColor } from "../contexts/ColorContext";
import ResumeFile from "../assets/resume/resume.pdf";
const QuickLinks = ({ title, links }) => {
    const { color } = useColor();
    const handleLinkClick = (link) => {
        if (!link.sectionId) {
            window.open(link.url, "_blank");
            return;
        }
        if (link.sectionId) {
            const section = document.getElementById(link.sectionId);
            if (link.sectionId === "resume") {
                const link = document.createElement("a");
                link.href = ResumeFile;
                link.download = "Resume_AravindhKrishna.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            if (section) {
                const yOffset = window.innerWidth < 768 ? -50 : -10;
                const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: yPosition, behavior: "smooth" });
            }
        }
        else {
            window.location.href = link.url;
        }
    };
    return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(Typography, { variant: "h6", color: `${color.textColor}`, fontWeight: 600, children: title }), links.map((link, index) => (_jsxs("div", { onClick: () => handleLinkClick(link), className: "flex items-center gap-2 cursor-pointer ", style: { alignItems: "center" }, children: [link.icon && _jsx(link.icon, { style: { color: `${color.textColor}` } }), " ", _jsx(Typography, { variant: "body1", color: `${color.textColor}`, children: link.name })] }, index)))] }));
};
export default QuickLinks;
