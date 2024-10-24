import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @package
 */
export const AppFallback = ({ error }) => {
    return (_jsxs("div", { role: "alert", children: [_jsx("p", { children: "An error has occurred." }), _jsx("p", { children: error.message }), _jsx("button", { onClick: onReload, children: "Reload or Refresh" })] }));
};
const onReload = () => {
    window.location.assign(window.location.origin);
};
