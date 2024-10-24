import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useRoutes } from "react-router-dom";
// import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { commonRoutes } from "./common";
// import { useAuth } from "@hooks/useAuth";
export const AppRoutes = () => {
    const isSignIn = true;
    const routes = isSignIn ? publicRoutes : commonRoutes;
    const element = useRoutes(routes);
    return _jsx(_Fragment, { children: element });
};
