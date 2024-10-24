import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Greeting from "../screens/Greeting";
import { Typography } from "@mui/material";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Platform from "../screens/Platform";
import Skills from "../screens/Skills";
import Works from "../screens/Works";
import Form from "../screens/Form";
import { useColor } from "../contexts/ColorContext";
const LandingPage = () => {
    const { color } = useColor();
    const headerStyle = {
        paddingBottom: 5,
        color: `${color.textColor}`,
    };
    return (_jsx(_Fragment, { children: _jsxs(ParallaxProvider, { children: [_jsx(Parallax, { id: "home", children: _jsx(Greeting, {}) }), _jsx(Typography, { variant: "h2", component: "h2", fontWeight: 500, sx: headerStyle, id: "about", children: "About me" }), _jsxs(Parallax, { children: [_jsx(Platform, {}), _jsx(Skills, {})] }), _jsx(Typography, { variant: "h2", component: "h2", fontWeight: 500, sx: headerStyle, id: "works", children: "Works" }), _jsx(Works, {}), _jsx(Typography, { variant: "h2", component: "h2", fontWeight: 500, sx: headerStyle, id: "contact", children: "Wanna be my Friend" }), _jsx(Form, {})] }) }));
};
export default LandingPage;
