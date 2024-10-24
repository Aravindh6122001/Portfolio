import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from "react";
const NotFoundPage = lazy(() => import("../../page/ErrorPage"));
console.log("common");
export const commonRoutes = [
    {
        path: "*",
        element: _jsx(NotFoundPage, {}),
    },
];
