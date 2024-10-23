import React from "react";
import Greeting from "../screens/Greeting";
import { Box, Container, Divider, Typography } from "@mui/material";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Platform from "../screens/Platform";
import Skills from "../screens/Skills";
import SpeedDialTooltip from "../components/SpeedDialTooltip";
import Works from "../screens/Works";
import Form from "../screens/Form";
import Footer from "../screens/Footer";
import { useColor } from "../contexts/ColorContext";

const LandingPage = () => {
  const { color } = useColor();

  const headerStyle = {
    paddingBottom: 5,
    color: `${color.textColor}`,
  };
  return (
    <>
      <ParallaxProvider>
        {/* Greeting Section with Parallax Effect */}
        <Parallax id="home">
          <Greeting />
        </Parallax>

        {/* Platform Section with Parallax Effect */}
        <Typography
          variant="h2"
          component="h2"
          fontWeight={500}
          sx={headerStyle}
          id="about"
        >
          About me
        </Typography>
        <Parallax>
          <Platform />
          <Skills />
        </Parallax>

        {/* Work Section with Parallax Effect */}
        <Typography
          variant="h2"
          component="h2"
          fontWeight={500}
          sx={headerStyle}
          id="works"
        >
          Works
        </Typography>

        <Works />

        {/* Friend with Parallax Effect */}
        <Typography
          variant="h2"
          component="h2"
          fontWeight={500}
          sx={headerStyle}
          id="contact"
        >
          Wanna be my Friend
        </Typography>

        <Form />
      </ParallaxProvider>
    </>
  );
};

export default LandingPage;
