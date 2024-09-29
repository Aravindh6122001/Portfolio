import { lazy } from "react";
import { PublicLayout } from "../../layout/PublicLayout";
import LandingPage from "../../page/LandingPage";

// const NotFoundPage = lazy(() => import("../../components/page/ErrorPage"));

console.log("public");

export const publicRoutes = [
  {
    path: "",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      //   {
      //     path: "/signin",
      //     element: <SignUpPage />,
      //   },
    ],
  },
];
