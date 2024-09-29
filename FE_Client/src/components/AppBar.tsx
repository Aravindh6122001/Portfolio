import * as React from "react";
import { Box, Toolbar, Typography, Button } from "@mui/material";
import Slide from "@mui/material/Slide";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

// Custom hook to hide the navbar when scrolling away from the top
function useAtTop() {
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return atTop;
}

// Component to hide the navbar on scroll
function HideOnScroll({ children }: Props) {
  const atTop = useAtTop();

  return (
    <Slide appear={false} direction="down" in={atTop}>
      {children}
    </Slide>
  );
}

const AppBar = (props: Props) => {
  const navItems = ["Works", "Resume", "About", "Contact"];

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <Box
          sx={{
            backgroundColor: "#242424",
            width: "800px", // Adjust the width as needed
            margin: "0 auto", // This centers the navbar horizontally
            borderRadius: "50px", // Optional: adds a subtle border radius
            position: "fixed", // Ensures it's fixed at the top
            top: 20,
            left: 0,
            right: 0,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left Side: Logo or Title */}
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Aravindh
            </Typography>

            {/* Right Side: Navigation Items */}
            <Box>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff", marginRight: 2 }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </HideOnScroll>
      <Toolbar /> {/* Empty Toolbar to push content down */}
    </React.Fragment>
  );
};

export default AppBar;
