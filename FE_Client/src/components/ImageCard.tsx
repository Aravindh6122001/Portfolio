import React, { CSSProperties } from "react";

import { BorderColor } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";

interface ImageCardProps {
  backdrop: any;
  name: string;
  description: string;
  navigateTo: any;
}

const ImageCard: React.FC<ImageCardProps> = ({
  backdrop,
  name,
  description,
  navigateTo,
}) => {
  const { color } = useColor();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = () => {
    navigate(navigateTo);
  };

  const styles: {
    card: CSSProperties;
    title: CSSProperties;
    description: CSSProperties;
  } = {
    card: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      height: "300px",
      width: "350px",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: "pointer",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out",
      // BorderWidth: hover ? "10px" : "0px",
      // BorderColor: hover ? "pink" : "none",
      boxShadow: hover
        ? "0px 10px 20px rgba(0,0,0,0.2)"
        : "0px 5px 10px rgba(0,0,0,0.1)",
      transform: hover ? "scale(1.05)" : "scale(1)",
      opacity: hover ? 0.7 : 1, // Change opacity on hover
    },
    title: {
      position: "absolute",
      bottom: "10px", // Keep the title at the bottom
      left: "20px",
      color: "black", // Change text color to black for better visibility
      fontWeight: "bold",
      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      transform: hover ? "translateY(-150px)" : "translateY(0)", // Move title up to the top of the description on hover
      // opacity: hover ? 0 : 1, // Fade out title on hover
      // backgroundColor: "blur",
    },
    description: {
      position: "absolute",
      bottom: "10px", // Position it just above the bottom of the card
      color: "black", // Change text color to white for better visibility
      opacity: hover ? 1 : 0, // Show description on hover
      transform: hover ? "translateY(0)" : "translateY(10px)", // Slide up the description
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      backgroundColor: `#FFFFFF`,
      padding: "5px",
    },
  };

  return (
    <div
      style={{
        ...styles.card,
        backgroundImage: `url(${backdrop})`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Typography variant="h4" style={styles.title}>
        {name}
      </Typography>
      <Typography variant="body1" style={styles.description}>
        {description}
      </Typography>
    </div>
  );
};

export default ImageCard;
