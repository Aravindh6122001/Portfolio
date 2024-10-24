import { jsx as _jsx } from "react/jsx-runtime";
import { PublicLayout } from "../../layout/PublicLayout";
import LandingPage from "../../page/LandingPage";
export const publicRoutes = [
    {
        path: "",
        element: _jsx(PublicLayout, {}),
        children: [
            {
                path: "/",
                element: _jsx(LandingPage, {}),
            },
        ],
    },
];
