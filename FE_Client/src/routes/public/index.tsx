import { lazy } from "react";
import { PublicLayout } from "../../layout/PublicLayout";

// const NotFoundPage = lazy(() => import("../../components/page/ErrorPage"));

console.log("public");

export const publicRoutes = [
  {
    path: "",
    element: <PublicLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <LoginPage />,
    //   },
    //   {
    //     path: "/signin",
    //     element: <SignUpPage />,
    //   },
    // ],
  },
];
