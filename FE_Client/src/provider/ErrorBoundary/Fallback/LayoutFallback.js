import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
/**
 * @package
 */
export const LayoutFallback = ({ error }) => {
    const navigate = useNavigate();
    const onGoBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { role: "alert", children: [_jsx("p", { children: "An error has occurred." }), _jsx("p", { children: error.message }), _jsx("button", { onClick: onGoBack, children: "Go back or Return" })] }));
};
