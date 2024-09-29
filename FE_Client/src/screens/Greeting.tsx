import React, { useEffect, useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import heroImage from "../assets/jpg/HeroImage.jpg";

const Greeting = () => {
  const greeting = `Hi, I'm Aravindh :)`;
  const shortNote = `A fullstack developer with 1+ years of experience building user-friendly solutions, including a data cleansing and storage system, a transportation booking platform, and a goal-tracking application.`;

  const [scrollY, setScrollY] = useState(0);

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
    // transition: "font-weight 0.1s ease",
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
      className={`flex flex-col justify-center items-center w-full h-[95vh] gap-3 overflow-hidden`}
    >
      <div>
        <Avatar
          alt="Remy Sharp"
          src={heroImage}
          sx={{
            width: 250,
            height: 250,
            borderColor: "#fff",
            borderWidth: 1,
            objectFit: "contain",
            opacity: avatarOpacity,
            transition: "opacity 0.2s ease-in-out",
          }}
        />
      </div>
      <div className="w-[88%]">
        <Parallax easing="easeOutQuad" translateY={[-100, 70]} speed={10}>
          <Typography
            ref={shortParallex.ref}
            variant="h2"
            component="h2"
            align="center"
            style={greetingStyle}
          >
            {greeting}
          </Typography>
        </Parallax>

        <Typography
          variant="h4"
          component="h4"
          align="center"
          fontWeight={400}
          style={{
            opacity: shortNoteOpacity,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {shortNote}
        </Typography>
      </div>
    </div>
  );
};

export default Greeting;
