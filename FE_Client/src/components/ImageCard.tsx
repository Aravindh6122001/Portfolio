import { Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

const ImageCard = ({ Icon, name }) => {
  return (
    <div className="border-2 border-white rounded-2xl p-10 flex flex-col gap-5 justify-between items-center h-[180px] w-[180px] overflow-hidden">
      <img src={Icon} alt="React Logo" width={50} height={50} />
      <Typography variant="h5">{name}</Typography>
    </div>
  );
};

export default ImageCard;
