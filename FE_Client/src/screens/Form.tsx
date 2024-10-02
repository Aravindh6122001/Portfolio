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
  const [messageValue, setMessageValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setIsSubmitted(true);
    setShowSuggestions(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setValue("email", "");
      setMessageValue("");
      setShowSuggestions(true);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion) => {
    setMessageValue(suggestion);
    setShowSuggestions(false);
  };

  const title = `Multi-Platform Solutions`;
  const description = `Let's break the ice and start a conversation! Whether you're looking for someone to chat about your favorite movies, share ideas, or just say hello, I'm here to make it easy and fun.Let's get started! `;

  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center">
      <div className="flex-1">
        <InfoCard description={description} />
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
              maxWidth: 400,
              backgroundColor: "#f5f5f5",
            }}
          >
            {/* Success Message */}

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
                  border: errors.message ? "1px solid red" : "1px solid #ccc", // Border around both input and button
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{
                    flexGrow: 1,
                    border: "none",
                    p: "10px",
                  }}
                  placeholder="Message"
                  value={messageValue} // Keeps the message field editable
                  onChange={(e) => setMessageValue(e.target.value)} // Updates state correctly
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
                  // disabled={!isValid}
                >
                  <EastIcon />
                </IconButton>
              </div>
            </div>

            <div className="flex items-center gap-5">
              {errors.email && (
                <Typography variant="body2" color="error">
                  {errors.email.message}
                </Typography>
              )}

              {isSubmitted &&
                errors.message && ( // Show error only when form is submitted
                  <Typography variant="body2" color="error">
                    {errors.message.message}
                  </Typography>
                )}
            </div>

            {/* Suggestion Chips */}
            <Box
              sx={{
                height: "100px", // Maintain box height
                //   overflow: "hidden", // Prevent shrinking after disappearance
                transition: "height 10s ease", // Smooth transition
                //   backgroundColor: "red",
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
                    //   p: 2,
                    animation: "fade-in 0.5s ease",
                  }}
                >
                  <DoneIcon sx={{ mr: 1 }} />
                  Success! We'll see you soon.
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
