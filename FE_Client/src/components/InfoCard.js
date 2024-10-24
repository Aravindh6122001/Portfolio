import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "@mui/material";
import { useColor } from "../contexts/ColorContext";
const InfoCard = ({ title, description }) => {
    const { color } = useColor();
    return (_jsxs("div", { className: "flex flex-col gap-5 py-10", children: [_jsx(Typography, { variant: "h3", component: "h2", className: "font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl", sx: {
                    color: `${color.textColor}`,
                }, children: title }), _jsx(Typography, { variant: "h6", component: "h2", className: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl", sx: {
                    color: `${color.textColor}`,
                }, children: description })] }));
};
export default InfoCard;
