import * as React from "react";
import {
  Box,
  Toolbar,
  Button,
  Divider,
  IconButton,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material"; // Import MUI icons
import DiscordIcon from "../assets/svg/discordIcon.svg";
import { useColor } from "../contexts/ColorContext";
import { bgColorClass, fontColorClass } from "../theme/color";

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

const AppBar = (props: Props) => {
  const navItems = ["Works", "Resume", "About", "Contact"];
  const { color, toggleColor } = useColor();
  const iconStyles = { color: `${color.textColor}`, marginRight: 1 };

  const [darkMode, setDarkMode] = React.useState(false); // State to handle theme toggle
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false); // State for Drawer
  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    toggleColor();
  };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const visible = useHideOnScroll(); // Use the custom hook to determine visibility

  // Drawer content for mobile view
  const drawerContent = (
    <Box
      sx={{ width: 250, backgroundColor: `${color.textColor}` }}
      className={`flex flex-col h-full gap-10`}
    >
      <Box className="flex justify-between items-center">
        <IconButton
          onClick={() => toggleDrawer(false)}
          sx={{ color: `${color.bgColor}` }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item}
            onClick={() => toggleDrawer(false)}
            style={{
              color: `${color.bgColor}`,
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
        <Divider sx={{ borderColor: `${color.bgColor}`, my: 2 }} />
        {/* Social Icons */}
        <Box className="flex space-x-4">
          <IconButton sx={{ color: `${color.bgColor}` }}>
            <Email />
          </IconButton>
          <IconButton sx={{ color: `${color.bgColor}` }}>
            <LinkedIn />
          </IconButton>
          <IconButton sx={{ color: `${color.bgColor}` }}>
            <GitHub />
          </IconButton>
          <IconButton sx={{ color: `${color.bgColor}` }}>
            <img src={DiscordIcon} alt="Discord Icon" width={24} height={24} />
          </IconButton>
        </Box>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Slide direction="down" in={visible}>
        <Box
          sx={{
            backgroundColor: `${color.bgColor}`,
            width: "800px",
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
          className={`hidden md:block`}
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
                <Button
                  key={item}
                  sx={{ color: `${color.textColor}`, marginRight: 2 }}
                >
                  {item}
                </Button>
              ))}
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: `${color.textColor}`,
                  height: 24,
                  marginX: 3,
                }}
              />{" "}
              {/* Vertical Divider */}
              {/* Social Icons Section */}
              <IconButton sx={iconStyles}>
                <Email />
              </IconButton>
              <IconButton sx={iconStyles}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={iconStyles}>
                <GitHub />
              </IconButton>
              {/* <IconButton sx={iconStyles}>
                <img
                  src={DiscordIcon}
                  alt="Discord Icon"
                  width={24}
                  height={24}
                />
              </IconButton> */}
              <IconButton sx={iconStyles}>
                <Email />
              </IconButton>
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: `${color.textColor}`,
                  height: 24,
                  marginX: 1,
                }}
              />{" "}
            </Box>

            {/* Theme Toggle Button */}
            <IconButton
              onClick={handleThemeToggle}
              sx={{ color: `${color.textColor}` }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Toolbar>
        </Box>
      </Slide>
      {/* Mobile Menu (Hamburger) */}
      <Box
        sx={{
          backgroundColor: "#242424",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
        className="md:hidden" // Visible only on mobile
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => toggleDrawer(true)}
            sx={{ color: "#fff", marginLeft: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Theme Toggle Button */}
          <IconButton onClick={handleThemeToggle} sx={{ color: "#fff" }}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Box>
      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>
      <Toolbar /> {/* Empty Toolbar to push content down */}
    </React.Fragment>
  );
};

export default AppBar;
