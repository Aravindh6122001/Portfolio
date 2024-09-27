import { lazy } from "react";

const NotFoundPage = lazy(() => import("../../components/page/ErrorPage"));

console.log("common");

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
