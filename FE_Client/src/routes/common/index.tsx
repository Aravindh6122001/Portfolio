import { lazy } from "react";

const NotFoundPage = lazy(() => import("../../page/ErrorPage"));

console.log("common");

export const commonRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
