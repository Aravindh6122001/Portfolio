import ImageCard from "../components/ImageCard";
import image1 from "../assets/jpg/image1.jpg";
import image2 from "../assets/jpg/image2.jpg";
import image3 from "../assets/jpg/image3.jpg";

import Logo from "../assets/svg/androidStudio.svg";
// import { Parallax } from "react-scroll-parallax";

const Works = () => {
  return (
    <div className="h-[auto] flex flex-wrap justify-around items-center gap-5 py-10 mb-5">
      {/* <Parallax scale={[0.7, 1.5]}> */}
      <ImageCard
        backdrop={image1}
        name="Card Title 1"
        description="This is a description for card 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fugit adipisci distinctio consequatur officia. Ea nulla consectetur repellat quos architecto itaque dolor voluptates aspernatur placeat.
."
        navigateTo="/page1"
      />
      {/* </Parallax> */}
      {/* <Parallax scale={[0.7, 1.5]}> */}
      <ImageCard
        backdrop={image2}
        name="Card Title 2"
        description="This is a description for card 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fugit adipisci distinctio consequatur officia. Ea nulla consectetur repellat quos architecto itaque dolor voluptates aspernatur placeat."
        navigateTo="/page2"
      />
      {/* </Parallax> */}

      {/* <Parallax scale={[0.7, 1.5]}> */}
      <ImageCard
        backdrop={image3}
        name="Card Title 3"
        description="This is a description for card 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fugit adipisci distinctio consequatur officia. Ea nulla consectetur repellat quos architecto itaque dolor voluptates aspernatur placeat."
        navigateTo="/page3"
      />
      {/* </Parallax> */}
    </div>
  );
};

export default Works;
