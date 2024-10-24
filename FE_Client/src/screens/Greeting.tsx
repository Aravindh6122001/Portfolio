import React, { useEffect, useState } from "react";
import { Avatar, Typography, useMediaQuery } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import heroImage from "../assets/jpg/HeroImage.jpg";
import stripesSvg from "../assets/svg/stripes.svg"; // Import the SVG
import { useColor } from "../contexts/ColorContext";

const Greeting = () => {
  const greeting = `Hi, I'm Aravindh :)`;
  const shortNote = `A fullstack developer with 1+ years 
  of experience building user-friendly solutions, including a 
  data cleansing and storage system, a transportation booking 
  platform, and a goal-tracking application.`;

  const isXsOrSmOrMd = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  );

  const variant = isXsOrSmOrMd ? "h5" : "h4";

  const [scrollY, setScrollY] = useState(0);
  const { color } = useColor(); // Use the color context

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const avatarOpacity = Math.max(1 - scrollY / 20, 0);
  const shortNoteOpacity = Math.max(1 - scrollY / 20, 0);

  const greetingStyle = {
    fontWeight: scrollY > 0 ? "bold" : "normal",
  };

  const shortParallex = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [0, 50],
    scale: [1, 1.5],
    opacity: [1, 0.5],
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <div
      className={`flex flex-col justify-center items-center w-full ${
        isXsOrSmOrMd && "h-[80vh]"
      } h-[100vh] xs:mt-24 sm:mt-0 overflow-hidden`}
    >
      {/* Avatar Container with Stripes SVG */}
      <div className="relative flex justify-center items-center">
        {/* Stripes SVG Background behind the Avatar */}
        <img
          src={stripesSvg}
          alt="Stripes"
          style={{
            position: "absolute",
            width: "fit", // Adjust the size to fit the avatar
            height: "110%", // Adjust the size to fit the avatar
            top: 0,
            left: 0,
            zIndex: -1,
            filter: `opacity(0.5) drop-shadow(0 0 0 ${color.textColor})`,
          }}
        />

        {/* Avatar Section */}
        <Avatar
          alt="Aravindh"
          src={heroImage}
          sx={{
            width: { xs: 200, sm: 240, md: 270 }, // Responsive avatar size based on your screens
            height: { xs: 200, sm: 240, md: 270 },
            borderColor: `${color.textColor}`,
            borderWidth: 1,
            objectFit: "contain",
            opacity: avatarOpacity,
            transition: "opacity 0.2s ease-in-out",
            position: "relative", // ensures it stays above the background
            zIndex: 1,
          }}
        />
      </div>

      {/* Greeting and Short Note Section */}
      <div className="flex flex-col xs:gap-24 sm:gap-6 w-[90%] md:w-[70%] overflow-hidden ">
        <Parallax easing="easeOutQuad" translateY={[-100, 70]} speed={10}>
          <Typography
            ref={shortParallex.ref}
            variant="h2"
            component="h2"
            align="center"
            style={greetingStyle}
            className="text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            sx={{
              color: `${color.textColor}`,
            }}
          >
            {greeting}
          </Typography>
        </Parallax>

        <Typography
          variant={variant}
          component="h4"
          align="center"
          className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-2"
          style={{
            opacity: shortNoteOpacity,
            transition: "opacity 0.2s ease-in-out",
            color: `${color.textColor}`,
          }}
        >
          {shortNote}
        </Typography>
      </div>
    </div>
  );
};

export default Greeting;
