import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Paper,
  InputBase,
  IconButton,
  Chip,
  Typography,
  Zoom,
  Fade,
  Box,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import DoneIcon from "@mui/icons-material/Done";
import MobileIcon from "@mui/icons-material/Smartphone";
import DesktopIcon from "@mui/icons-material/DesktopWindows";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { keyframes } from "@emotion/react";
import InfoCard from "../components/InfoCard";
import { Parallax } from "react-scroll-parallax";
import { useFetch } from "../hooks/useFetch";
import { useColor } from "../contexts/ColorContext";

// Shake animation for error
const shake = keyframes`
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const { fetchData } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/messages/`
  );

  const onSubmit = async (data: any) => {
    setIsSubmitted(true);
    setShowSuggestions(false);

    // Send data to your endpoint
    const response = await fetchData(
      `${import.meta.env.VITE_BACKEND_URL}/messages/`,
      {
        method: "POST",
        body: {
          email: data.email,
          message: data.message,
        },
      }
    );

    if (response) {
      console.log("Response from server:", response);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setValue("email", "");
      setValue("message", "");
      setShowSuggestions(true);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setValue("message", suggestion);
    setShowSuggestions(false);
  };

  const descriptionLines = [
    {
      text: "Let's break the ice and have a chat !!",
      variant: "h5",
    },
    {
      text: (
        <>
          Whether you want to talk about your favorite movies 🎬, share cool
          ideas, dive into the recent industry trend or just say ,
          <Typography
            variant="h4"
            component="span"
            sx={{ display: "inline", color: `${color.textColor}` }}
          >
            {" "}
            Hello 👋
          </Typography>
        </>
      ),
      variant: "h6",
    },
    {
      text: "I'm here to make it easy and fun. Looking forward to connect!",
      variant: "h6",
    },
  ];

  const handleInputChange = (e: any) => {
    if (e.target.value.length <= 1) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="w-full h-auto flex justify-around items-center gap-10 flex-wrap">
      <div className="max-w-[900px]">
        <div className="flex flex-col gap-5 py-10">
          {descriptionLines.map((line, index) => (
            <Typography
              key={index}
              variant={line.variant as "h2"}
              component="h2"
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              sx={{
                color: `${color.textColor}`,
              }}
            >
              {line.text}
            </Typography>
          ))}
        </div>
      </div>
      <Parallax scale={[0.9, 1.5, "easeInQuad"]}>
        <Zoom in={true} timeout={500}>
          <Paper
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              p: "20px",
              borderRadius: "15px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              maxWidth: 350,
              backgroundColor: "#f5f5f5",
            }}
          >
            {/* Email Input */}
            <div style={{ animation: errors.email ? `${shake} 0.5s` : "none" }}>
              <InputBase
                sx={{
                  border: errors.email ? "1px solid red" : "1px solid #ccc",
                  borderRadius: "10px",
                  p: "10px",
                  mb: "10px",
                  width: "100%",
                }}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>

            {/* Message Input with Submit Button */}
            <div
              style={{ animation: errors.message ? `${shake} 0.5s` : "none" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: errors.message ? "1px solid red" : "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{
                    flexGrow: 1,
                    p: "10px",
                  }}
                  placeholder="Message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 2,
                      message: "Message is too short (minimum is 2 characters)",
                    },
                    onChange: handleInputChange,
                  })}
                />

                <IconButton
                  type="submit"
                  sx={{
                    ml: 1,
                    backgroundColor: isValid ? "#4CAF50" : "#ccc",
                    color: "white",
                    p: "5px",
                    borderRadius: "50%",
                    borderColor: "#ccc",
                    borderWidth: "2px",
                  }}
                >
                  <EastIcon />
                </IconButton>
              </div>
            </div>

            <div className="flex items-center gap-5">
              {isSubmitted && errors.message && (
                <Typography variant="body2" color="error">
                  {"Enter Valid Email address"}
                </Typography>
              )}
            </div>

            {/* Suggestion Chips */}
            <Box
              sx={{
                height: "100px",
                transition: "height 10s ease",
              }}
            >
              {isSubmitted && (
                <Typography
                  variant="h6"
                  sx={{
                    color: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                  }}
                >
                  {/* <DoneIcon sx={{ mr: 1 }} /> */}
                  Message Sent 👍
                </Typography>
              )}
              <Fade in={showSuggestions} timeout={500}>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {suggestions.map((suggestion) => (
                    <Chip
                      key={suggestion.label}
                      label={suggestion.label}
                      onClick={() => handleSuggestionClick(suggestion.label)}
                      icon={<suggestion.icon />}
                      sx={{
                        mr: "10px",
                        mb: "10px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  ))}
                </div>
              </Fade>
            </Box>
          </Paper>
        </Zoom>
      </Parallax>
    </div>
  );
};

export default Form;
