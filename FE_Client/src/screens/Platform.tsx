import InfoCard from "../components/InfoCard";
import { Parallax } from "react-scroll-parallax";
import CodeIcon from "@mui/icons-material/Code";
import MobileIcon from "@mui/icons-material/Smartphone"; // Example mobile icon
import DesktopIcon from "@mui/icons-material/DesktopWindows"; // Example desktop icon
import { useState } from "react";
import WorkingGif from "../assets/gif/Working.gif";

const Platform = () => {
  const [progress, setProgress] = useState(0); // Track scroll progress
  const title = `Multi-Platform Solutions`;
  const description = `Specializing in the development of cutting-edge, high-performance
        applications for both mobile and web platforms. Ensuring seamless user
        experiences, optimized performance, and scalable solutions to meet the
        demands of modern digital ecosystems.`;

  return (
    <div className="w-full h-auto flex flex-wrap items-center">
      <div className="flex-1">
        <InfoCard title={title} description={description} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Parallax onProgressChange={(progress) => setProgress(progress)}>
          <div
            className="spinner"
            style={{
              width: "200px", // Set the width of the circle
              height: "200px", // Set the height of the circle
              borderRadius: "50%", // Make it circular
              backgroundColor: "transparent", // Transparent background
              border: "2px solid white", // White border
              position: "relative", // Position relative for inner elements
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.1s ease-out", // Smooth transition for rotation
              transform: `rotate(${progress * 720}deg)`, // Rotate based on scroll progress
            }}
          >
            {/* Centered Code Icon */}
            {/* <CodeIcon style={{ fontSize: "50px", position: "absolute" }} /> */}
            <img
              src={WorkingGif}
              width={150}
              height={150}
              style={{
                position: "absolute", // Position the image absolutely
                top: "50%", // Center vertically
                left: "50%", // Center horizontally
                transform: "translate(-50%, -50%)", // Adjust position to truly center the image
                zIndex: 1, // Ensure the image is above the circle
              }}
              alt="Working animation"
            />
            {/* Rotating Icons along the border */}
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
                  transform: `translate(-50%, -100%) `, // Top position
                }}
              >
                <MobileIcon style={{ fontSize: "30px" }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: `translate(-50%, 100%)`, // Bottom position
                }}
              >
                <DesktopIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Platform;
