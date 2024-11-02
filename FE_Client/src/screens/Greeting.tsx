import React, { useEffect, useState } from "react";
import { Avatar, Skeleton, Typography, useMediaQuery } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";
import heroImageDark from "../assets/jpg/HeroImage_dark.png";
import heroImageLight from "../assets/jpg/HeroImage_light.png";
import stripesSvg from "../assets/svg/stripes.svg"; // Import the SVG
import { useColor } from "../contexts/ColorContext";

const Greeting = () => {
  const greeting = `Hi, I'm Aravindh`;
  const shortNote = `Full Stack Developer with over 1 year of experience in designing and implementing
   user-friendly solutions, including a 
  data cleansing and storage system, a transportation booking 
  platform, and a goal-tracking application.`;

  const isXsOrSmOrMd = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  );

  const isXsOrSm = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme: any) => theme.breakpoints.up("md")); // Check for md screen size

  const greetingVariant = isXsOrSm ? "h4" : "h2";
  const descriptionVariant = isXsOrSm ? "h5" : "h4";

  const [scrollY, setScrollY] = useState(0);
  const { color } = useColor();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  // Update loading state whenever bgColor changes
  useEffect(() => {
    setIsImageLoading(true); // Show skeleton while image is updating
  }, [color.bgColor]);

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [avatarOpacity, setAvatarOpacity] = useState(0); // Set initial opacity to 0

  // Handle scroll to set opacity based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update loader state when background color changes
  useEffect(() => {
    setIsImageLoading(true); // Show loader
    setAvatarOpacity(0); // Set opacity to 0
  }, [color.bgColor]);

  // Handle avatar opacity based on scroll position
  useEffect(() => {
    const updateOpacity = () => {
      const newOpacity = scrollY < 300 ? Math.max(1 - scrollY / 200, 0) : 0;
      setAvatarOpacity(newOpacity);
    };
    updateOpacity();
  }, [scrollY]);

  // Set loader off when image loads
  const handleImageLoad = () => {
    setIsImageLoading(false);
    setAvatarOpacity(1); // Set opacity to 1 once image has loaded
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-full ${
        isXsOrSmOrMd ? "h-[80vh]" : "h-[100vh]"
      } xs:mt-24 sm:mt-0 overflow-hidden`}
    >
      {/* Avatar Container with Stripes SVG */}
      <div className="relative flex justify-center items-center mb-4 xs:mb-2">
        <img
          src={stripesSvg}
          alt="Stripes"
          style={{
            position: "absolute",
            width: "fit",
            height: "110%",
            top: 0,
            left: 0,
            zIndex: -1,
            filter: `opacity(0.5) drop-shadow(0 0 0 ${color.textColor})`,
          }}
        />

        {/* Avatar Section with Skeleton */}
        <div className="relative flex justify-center items-center mb-4 xs:mb-2">
          {isImageLoading && (
            <Skeleton
              variant="circular"
              animation="wave"
              sx={{
                width: { xs: 200, sm: 240, md: 280 },
                height: { xs: 200, sm: 240, md: 280 },
                position: "absolute",
                zIndex: 0,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderWidth: 2,
                borderColor: `${color.textColor}`,
              }}
            />
          )}

          <Avatar
            alt="Aravindh"
            src={color.bgColor === "#242424" ? heroImageDark : heroImageLight}
            onLoad={handleImageLoad} // Trigger hiding skeleton when loaded
            sx={{
              width: { xs: 200, sm: 240, md: 280 },
              height: { xs: 200, sm: 240, md: 280 },
              borderColor: `${color.textColor}`,
              opacity: avatarOpacity, // Hide Avatar until loaded
              transition: "opacity 0.3s ease-in-out",
              position: "relative",
              zIndex: 1,
              borderWidth: 2,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Greeting and Short Note Section */}
      <div
        className={`flex flex-col ${
          isXsOrSm ? "gap-4" : isMd ? "gap-12" : "gap-6" // Adjust gap for md screens
        } w-[90%] md:w-[70%] overflow-hidden`}
      >
        <Parallax easing="easeOutQuad" translateY={[-100, 70]} speed={10}>
          <Typography
            variant={greetingVariant}
            ref={shortParallex.ref}
            component="h2"
            align="center"
            style={greetingStyle}
            className={`text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
              isMd ? "text-5xl" : ""
            }`}
            sx={{
              color: `${color.textColor}`,
            }}
          >
            {greeting}
          </Typography>
        </Parallax>

        <Typography
          variant={descriptionVariant}
          component="h4"
          align="center"
          className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-2 ${
            isMd ? "text-2xl" : ""
          }`} // Adjust text size for md screens
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
