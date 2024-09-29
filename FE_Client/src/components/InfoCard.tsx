import React from "react";
import { Typography } from "@mui/material";

const InfoCard = () => {
  return (
    <div className="flex flex-col gap-5 border-2 rounded-2xl  border-yellow-50 p-10">
      <Typography variant="h3" component="h2">
        Multi-Platform Solutions
      </Typography>
      <Typography variant="h6" component="h2">
        Specializing in the development of cutting-edge, high-performance
        applications for both mobile and web platforms. Ensuring seamless user
        experiences, optimized performance, and scalable solutions to meet the
        demands of modern digital ecosystems.
      </Typography>
    </div>
  );
};

export default InfoCard;
