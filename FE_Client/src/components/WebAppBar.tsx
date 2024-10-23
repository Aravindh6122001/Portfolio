import * as React from "react";
import {
  Box,
  Toolbar,
  Button,
  IconButton,
  Divider,
  Slide,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import DiscordIcon from "../assets/svg/DiscordIcon";

import { useColor } from "../contexts/ColorContext";
import { navItems, email, linkedin, github, discord } from "../constants";

interface WebAppBarProps {
  darkMode: boolean;
  onThemeToggle: () => void;
  scrollToSection: any;
}

function useHideOnScroll() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Scroll down
      } else {
        setVisible(true); // Scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return visible;
}

const WebAppBar: React.FC<WebAppBarProps> = ({
  darkMode,
  onThemeToggle,
  scrollToSection,
}) => {
  const { color } = useColor();
  const iconStyles = { color: `${color.textColor}`, marginRight: 1 };

  const visible = useHideOnScroll();

  return (
    <Slide direction="down" in={visible}>
      <Box
        sx={{
          backgroundColor: `${color.bgColor}`,
          maxWidth: "750px",
          margin: "0 auto",
          borderRadius: "50px",
          position: "fixed",
          top: 20,
          left: 0,
          right: 0,
          borderWidth: 1,
          borderColor: `${color.textColor}`,
          zIndex: 10,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{ color: `${color.textColor}`, marginRight: 2 }}
              >
                {item}
              </Button>
            ))}
            <Divider
              orientation="vertical"
              sx={{ borderColor: `${color.textColor}`, height: 24, marginX: 3 }}
            />
            <IconButton href={email} target="_blank" sx={iconStyles}>
              <Email />
            </IconButton>
            <IconButton href={linkedin} target="_blank" sx={iconStyles}>
              <LinkedIn />
            </IconButton>
            <IconButton href={github} target="_blank" sx={iconStyles}>
              <GitHub />
            </IconButton>
            <IconButton href={discord} target="_blank">
              <DiscordIcon color={color.textColor} />
            </IconButton>
          </Box>
          <IconButton
            onClick={onThemeToggle}
            sx={{ color: `${color.textColor}` }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Box>
    </Slide>
  );
};

export default WebAppBar;
