import React, { CSSProperties, useState } from "react";
import { Typography, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";

interface ImageCardProps {
  backdrop: string;
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
  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const color = useColor();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = () => {
    navigate(navigateTo);
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Hide skeleton when image is loaded
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
      boxShadow: hover
        ? "0px 10px 20px rgba(0,0,0,0.2)"
        : "0px 5px 10px rgba(0,0,0,0.1)",
      transform: hover ? "scale(1.05)" : "scale(1)",
    },
    title: {
      position: "absolute",
      bottom: "10px",
      left: "20px",
      color: "black",
      fontWeight: "bold",
      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      transform: hover ? "translateY(-150px)" : "translateY(0)",
    },
    description: {
      position: "absolute",
      bottom: "10px",
      color: "black",
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0)" : "translateY(10px)",
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      backgroundColor: "#FFFFFF",
      padding: "5px",
    },
  };

  return (
    <div
      style={{
        ...styles.card,
        backgroundImage: isLoading ? "none" : `url(${backdrop})`, // Hide background while loading
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Show Skeleton while loading */}
      {isLoading && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={350}
          height={300}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            borderRadius: "20px",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            borderColor: `${color.textColor}`,
          }}
        />
      )}

      {/* Image with onLoad to handle loading state */}
      <img
        src={backdrop}
        alt={name}
        onLoad={handleImageLoad}
        style={{
          display: "none", // Hide the actual img tag, only using it to detect load
        }}
      />

      {/* Card content */}
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
