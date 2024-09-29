import React from "react";
import Greeting from "../screens/Greeting";
import { Box, Container, Divider, Typography } from "@mui/material";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Platform from "../screens/Platform";
import Skills from "../screens/Skills";
import SpeedDialTooltip from "../components/SpeedDialTooltip";

const LandingPage = () => {
  return (
    <>
      <ParallaxProvider>
        {/* Greeting Section with Parallax Effect */}
        <Parallax
        // easing="easeOutQuad"
        // translateX={[-100, 100, "easeInQuint"]}
        // speed={0.5}
        >
          <Greeting />
        </Parallax>
        {/* Platform Section with Parallax Effect */}
        <Typography variant="h2" component="h2" fontWeight={500}>
          About me
        </Typography>
        <Parallax
        // easing="easeOutQuad" translateX={[-100, 20]} speed={0.1}
        >
          <Platform />
        </Parallax>
        <Typography variant="h2" component="h2" fontWeight={500}>
          Skills
        </Typography>
        {/* Skills Section with Parallax Effect */}
        <Parallax easing="easeOutQuad" translateY={[100, -20]} speed={10}>
          <Skills />
        </Parallax>
        <Typography variant="h2" component="h2" fontWeight={500}>
          Works
        </Typography>

        <Parallax easing="easeOutQuad" translateX={[100, -40]} speed={10}>
          <Skills />
        </Parallax>
      </ParallaxProvider>

      {/* Sticky SpeedDial at the bottom left */}
      <Box sx={{ position: "sticky", bottom: 16, left: 16, zIndex: 1000 }}>
        <SpeedDialTooltip />
      </Box>
    </>
  );
};

export default LandingPage;
