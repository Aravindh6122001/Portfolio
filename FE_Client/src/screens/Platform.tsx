import InfoCard from "../components/InfoCard";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import WorkingGif from "../assets/gif/Working.gif";
import MobApp from "../assets/svg/mobile.svg";
import WebAppp from "../assets/svg/webProcess.svg";

import { useColor } from "../contexts/ColorContext";
import { useMediaQuery } from "@mui/material";

const Platform = () => {
  const [progress, setProgress] = useState(0);
  const { color } = useColor();
  const title = `Multi-Platform Solutions`;
  const description = `Specializing in the development of cutting-edge, high-performance
        applications for both mobile and web platforms. Ensuring seamless user
        experiences, optimized performance, and scalable solutions to meet the
        demands of modern digital ecosystems.`;

  const isXsOrSm = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-center xs:gap-8">
      <div className="flex-1 p-4">
        <InfoCard title={title} description={description} />
      </div>
      <div className="flex-1 flex justify-center items-center min-w-[250px] md:min-w-[400px] p-4">
        <Parallax onProgressChange={(progress) => setProgress(progress)}>
          <div
            className="spinner"
            style={{
              width: "260px", // Set the width of the circle
              height: "260px", // Set the height of the circle
              borderRadius: "50%", // Make it circular
              backgroundColor: "transparent", // Transparent background
              border: `2px solid ${color.textColor}`, // Border color
              position: "relative", // Position relative for inner elements
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Centered Working Gif */}
            <img
              src={WorkingGif}
              width={200}
              height={200}
              style={{
                position: "absolute", // Position the image absolutely
                top: "50%", // Center vertically
                left: "50%", // Center horizontally
                transform: `translate(-50%, -50%) rotate(${progress * 720}deg)`, // Rotate based on scroll progress
                zIndex: 1, // Ensure the image is above the circle
              }}
              alt="Working animation"
            />

            {/* Fixed Icons along the border */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Positioning icons around the border */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: `translate(-80%, -80%)`,
                }}
              >
                <img
                  src={MobApp}
                  width={200}
                  height={200}
                  alt="Mobile App Icon"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: `translate(-10%, 50%)`, // Center the icon
                }}
              >
                <img
                  src={WebAppp}
                  width={200}
                  height={200}
                  alt="Web App Icon"
                />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Platform;
