import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ImageCard from "../components/ImageCard";
import image1 from "../assets/jpg/image1.jpg";
import image2 from "../assets/jpg/image2.jpg";
import image3 from "../assets/jpg/image3.jpg";
// import { Parallax } from "react-scroll-parallax";
const Works = () => {
    return (_jsxs("div", { className: "h-[auto] flex flex-wrap justify-around items-center gap-5 py-10 mb-5", children: [_jsx(ImageCard, { backdrop: image1, name: "Booking & Reservation System", description: "I developed a mobile application that provides a seamless experience for booking both cabs and hotels. The app allows users to easily book rides and accommodations, with real-time availability and secure payments. The application is deployed on both Android and iOS platforms, offering a smooth user interface and reliable performance across devices.\n.", navigateTo: "/page1" }), _jsx(ImageCard, { backdrop: image2, name: "Unified Data Platform", description: "Our platform processes raw e-commerce data collected from various sources. The data is cleansed, de-duplicated, and organized into a single unified system. Clients can access this centralized data through one gateway, providing them with clean, reliable, and consistent information for better decision-making.", navigateTo: "/page2" }), _jsx(ImageCard, { backdrop: image3, name: "Goal Tracking Platform", description: "This application helps track employee goals and performance across the organization. It allows managers to set objectives, monitor progress, and provide feedback. Additionally, it includes robust employee management features, making it easy to manage roles, assignments, and performance reviews\u2014all in one platform.", navigateTo: "/page3" })] }));
};
export default Works;
