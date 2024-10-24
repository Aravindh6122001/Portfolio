import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, InputBase, IconButton, Chip, Typography, Zoom, Fade, Box, } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import DoneIcon from "@mui/icons-material/Done";
import MobileIcon from "@mui/icons-material/Smartphone";
import DesktopIcon from "@mui/icons-material/DesktopWindows";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { keyframes } from "@emotion/react";
import { Parallax } from "react-scroll-parallax";
import { useFetch } from "../hooks/useFetch";
import { useColor } from "../contexts/ColorContext";
// Shake animation for error
const shake = keyframes `
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;
// Suggestions for the message
const suggestions = [
    { label: "Suggest a movie", icon: MobileIcon },
    { label: "Great job", icon: DoneIcon },
    { label: "Not bad", icon: ErrorOutlineIcon },
    { label: "When can we meet", icon: DesktopIcon },
];
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const { color } = useColor();
    const { register, handleSubmit, formState: { errors, isValid }, setValue, } = useForm({
        mode: "onChange",
    });
    const { fetchData } = useFetch("http://127.0.0.1:8000/messages/");
    const onSubmit = async (data) => {
        setIsSubmitted(true);
        setShowSuggestions(false);
        // Send data to your endpoint
        const response = await fetchData("http://127.0.0.1:8000/messages/", {
            method: "POST",
            body: {
                email: data.email,
                message: data.message, // Directly use data.message
            },
        });
        // Handle the response if necessary
        if (response) {
            console.log("Response from server:", response);
        }
        setTimeout(() => {
            setIsSubmitted(false);
            setValue("email", "");
            setValue("message", ""); // Reset message field using setValue
            setShowSuggestions(true);
        }, 2000);
    };
    const handleSuggestionClick = (suggestion) => {
        setValue("message", suggestion);
        setShowSuggestions(false);
    };
    const descriptionLines = [
        {
            text: "Let's break the ice and start a conversation!",
            variant: "h5",
        },
        {
            text: (_jsxs(_Fragment, { children: ["Whether you're looking for someone to chat about your favorite movies, share ideas, or just say", _jsxs(Typography, { variant: "h4", component: "span", sx: { display: "inline", color: `${color.textColor}` }, children: ["____", "hello"] })] })),
            variant: "h6",
        },
        {
            text: "I'm here to make it easy and fun. Looking forward to connect!",
            variant: "h6",
        },
    ];
    const handleInputChange = (e) => {
        if (e.target.value.length <= 1) {
            setShowSuggestions(true);
        }
    };
    return (_jsxs("div", { className: "w-full h-auto flex flex-wrap justify-between items-center ", children: [_jsx("div", { className: "max-w-[900px]", children: _jsx("div", { className: "flex flex-col gap-5 py-10", children: descriptionLines.map((line, index) => (_jsx(Typography, { variant: line.variant, component: "h2", className: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl", sx: {
                            color: `${color.textColor}`,
                        }, children: line.text }, index))) }) }), _jsx(Parallax, { scale: [0.9, 1.5, "easeInQuad"], children: _jsx(Zoom, { in: true, timeout: 500, children: _jsxs(Paper, { component: "form", onSubmit: handleSubmit(onSubmit), sx: {
                            p: "20px",
                            borderRadius: "15px",
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                            maxWidth: 350,
                            backgroundColor: "#f5f5f5",
                        }, children: [_jsx("div", { style: { animation: errors.email ? `${shake} 0.5s` : "none" }, children: _jsx(InputBase, { sx: {
                                        border: errors.email ? "1px solid red" : "1px solid #ccc",
                                        borderRadius: "10px",
                                        p: "10px",
                                        mb: "10px",
                                        width: "100%",
                                    }, placeholder: "Email", ...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Enter a valid email address",
                                        },
                                    }) }) }), _jsx("div", { style: { animation: errors.message ? `${shake} 0.5s` : "none" }, children: _jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        border: errors.message ? "1px solid red" : "1px solid #ccc",
                                        borderRadius: "10px",
                                        padding: "5px",
                                        backgroundColor: "#fff",
                                        width: "100%",
                                    }, children: [_jsx(InputBase, { sx: {
                                                flexGrow: 1,
                                                p: "10px",
                                            }, placeholder: "Message", ...register("message", {
                                                required: "Message is required",
                                                minLength: {
                                                    value: 2,
                                                    message: "Message is too short (minimum is 2 characters)",
                                                },
                                                onChange: handleInputChange,
                                            }) }), _jsx(IconButton, { type: "submit", sx: {
                                                ml: 1,
                                                backgroundColor: isValid ? "#4CAF50" : "#ccc",
                                                color: "white",
                                                p: "5px",
                                                borderRadius: "50%",
                                                borderColor: "#ccc",
                                                borderWidth: "2px",
                                            }, children: _jsx(EastIcon, {}) })] }) }), _jsx("div", { className: "flex items-center gap-5", children: isSubmitted && errors.message && (_jsx(Typography, { variant: "body2", color: "error", children: "Enter Valid Email address" })) }), _jsxs(Box, { sx: {
                                    height: "100px",
                                    transition: "height 10s ease",
                                }, children: [isSubmitted && (_jsx(Typography, { variant: "h6", sx: {
                                            color: "green",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100px",
                                        }, children: "Message Sent \uD83D\uDC4D" })), _jsx(Fade, { in: showSuggestions, timeout: 500, children: _jsx("div", { style: {
                                                marginTop: "20px",
                                                display: "flex",
                                                flexWrap: "wrap",
                                            }, children: suggestions.map((suggestion) => (_jsx(Chip, { label: suggestion.label, onClick: () => handleSuggestionClick(suggestion.label), icon: _jsx(suggestion.icon, {}), sx: {
                                                    mr: "10px",
                                                    mb: "10px",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    transition: "transform 0.2s",
                                                    "&:hover": {
                                                        transform: "scale(1.05)",
                                                    },
                                                } }, suggestion.label))) }) })] })] }) }) })] }));
};
export default Form;
