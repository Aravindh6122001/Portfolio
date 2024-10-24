import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
const actions = [
    { icon: _jsx(GitHubIcon, {}), name: "GitHub" },
    { icon: _jsx(LinkedInIcon, {}), name: "LinkedIn" },
    { icon: _jsx(EmailIcon, {}), name: "Gmail" },
    { icon: _jsx(ArticleIcon, {}), name: "Resume" },
];
const SpeedDialTooltip = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (_jsxs(Box, { children: [_jsx(Backdrop, { open: open }), _jsx(SpeedDial, { ariaLabel: "SpeedDial tooltip example", sx: { position: "absolute", bottom: 16, right: 16 }, icon: _jsx(SpeedDialIcon, {}), onClose: handleClose, onOpen: handleOpen, open: open, children: actions.map((action) => (_jsx(SpeedDialAction, { icon: action.icon, tooltipTitle: action.name, tooltipOpen: true, onClick: handleClose }, action.name))) })] }));
};
export default SpeedDialTooltip;
