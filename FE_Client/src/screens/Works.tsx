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
        name="Booking & Reservation System"
        description="I developed a mobile application that provides a seamless experience for booking both cabs and hotels. The app allows users to easily book rides and accommodations, with real-time availability and secure payments. The application is deployed on both Android and iOS platforms, offering a smooth user interface and reliable performance across devices.
."
        navigateTo="/page1"
      />
      {/* </Parallax> */}
      {/* <Parallax scale={[0.7, 1.5]}> */}
      <ImageCard
        backdrop={image2}
        name="Unified Data Platform"
        description="Our platform processes raw e-commerce data collected from various sources. The data is cleansed, de-duplicated, and organized into a single unified system. Clients can access this centralized data through one gateway, providing them with clean, reliable, and consistent information for better decision-making."
        navigateTo="/page2"
      />
      {/* </Parallax> */}

      {/* <Parallax scale={[0.7, 1.5]}> */}
      <ImageCard
        backdrop={image3}
        name="Goal Tracking Platform"
        description="This application helps track employee goals and performance across the organization. It allows managers to set objectives, monitor progress, and provide feedback. Additionally, it includes robust employee management features, making it easy to manage roles, assignments, and performance reviews—all in one platform."
        navigateTo="/page3"
      />
      {/* </Parallax> */}
    </div>
  );
};

export default Works;
