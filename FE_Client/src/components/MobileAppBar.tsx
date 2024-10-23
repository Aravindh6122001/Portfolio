import * as React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { useColor } from "../contexts/ColorContext";
import { discord, email, github, linkedin, navItems } from "../constants";
import DiscordIcon from "../assets/svg/DiscordIcon";

interface MobileAppBarProps {
  darkMode: boolean;
  onThemeToggle: () => void;
  scrollToSection: any;
}

const MobileAppBar: React.FC<MobileAppBarProps> = ({
  darkMode,
  onThemeToggle,
  scrollToSection,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { color } = useColor();

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const handleNavClick = (sectionId: string) => {
    toggleDrawer(false);
    scrollToSection(sectionId);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#242424",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
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
        <IconButton
          onClick={() => toggleDrawer(true)}
          sx={{ color: "#fff", marginLeft: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton onClick={onThemeToggle} sx={{ color: "#fff" }}>
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, backgroundColor: `${color.textColor}` }}
          className="flex flex-col h-full gap-10"
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
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <Divider sx={{ borderColor: `${color.bgColor}`, my: 2 }} />
            <Box className="flex space-x-4">
              <IconButton href={email} sx={{ color: `${color.bgColor}` }}>
                <Email />
              </IconButton>
              <IconButton href={linkedin} sx={{ color: `${color.bgColor}` }}>
                <LinkedIn />
              </IconButton>
              <IconButton href={github} sx={{ color: `${color.bgColor}` }}>
                <GitHub />
              </IconButton>
              <IconButton href={discord} target="_blank">
                <DiscordIcon color={color.textColor} />{" "}
              </IconButton>
            </Box>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileAppBar;
