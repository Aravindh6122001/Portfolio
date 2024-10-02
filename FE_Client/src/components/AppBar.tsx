import * as React from "react";
import {
  Box,
  Toolbar,
  Button,
  Divider,
  IconButton,
  Slide,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  DarkMode,
  LightMode,
} from "@mui/icons-material"; // Import MUI icons
import DiscordIcon from "../assets/svg/discordIcon.svg";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

// Custom hook to hide the navbar when scrolling away from the top
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

// Component for the AppBar
const AppBar = (props: Props) => {
  const navItems = ["Works", "Resume", "About", "Contact"];

  const [darkMode, setDarkMode] = React.useState(false); // State to handle theme toggle
  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const visible = useHideOnScroll(); // Use the custom hook to determine visibility

  return (
    <React.Fragment>
      <Slide direction="down" in={visible}>
        <Box
          sx={{
            backgroundColor: "#242424",
            width: "800px", // Adjust the width as needed
            margin: "0 auto", // Center the navbar horizontally
            borderRadius: "50px", // Optional: adds a subtle border radius
            position: "fixed", // Ensures it's fixed at the top
            top: 20,
            left: 0,
            right: 0,
            borderWidth: 1,
            borderColor: "#fff",
            zIndex: 10, // Keep it on top of other elements
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Side: Navigation Items */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff", marginRight: 2 }}>
                  {item}
                </Button>
              ))}
              <Divider
                orientation="vertical"
                sx={{ borderColor: "#fff", height: 24, marginX: 3 }}
              />{" "}
              {/* Vertical Divider */}
              {/* Social Icons Section */}
              <IconButton sx={{ color: "#fff", marginRight: 1 }}>
                <Email />
              </IconButton>
              <IconButton sx={{ color: "#fff", marginRight: 1 }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "#fff", marginRight: 1 }}>
                <GitHub />
              </IconButton>
              <IconButton sx={{ color: "#fff", marginRight: 1 }}>
                <img
                  src={DiscordIcon}
                  alt="Discord Icon"
                  width={24}
                  height={24}
                />{" "}
                {/* Updated size */}
              </IconButton>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "#fff", height: 24, marginX: 1 }}
              />{" "}
            </Box>

            {/* Theme Toggle Button */}
            <IconButton onClick={handleThemeToggle} sx={{ color: "#fff" }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </Box>
      </Slide>
      <Toolbar /> {/* Empty Toolbar to push content down */}
    </React.Fragment>
  );
};

export default AppBar;
