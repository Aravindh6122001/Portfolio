import { PublicLayout } from "../../layout/PublicLayout";
import LandingPage from "../../page/LandingPage";

export const publicRoutes = [
  {
    path: "",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
];
