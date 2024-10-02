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

const LandingPage = () => {
  return (
    <>
      <ParallaxProvider>
        {/* Greeting Section with Parallax Effect */}
        <Parallax>
          <Greeting />
        </Parallax>

        {/* Platform Section with Parallax Effect */}
        <Typography
          variant="h2"
          component="h2"
          fontWeight={500}
          sx={{ paddingBottom: 5 }}
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
          sx={{ paddingBottom: 5 }}
        >
          Works
        </Typography>

        <Works />

        {/* Friend with Parallax Effect */}
        <Typography
          variant="h2"
          component="h2"
          fontWeight={500}
          sx={{ paddingBottom: 5 }}
        >
          Wanna be my Friend
        </Typography>

        <Form />
      </ParallaxProvider>
    </>
  );
};

export default LandingPage;
