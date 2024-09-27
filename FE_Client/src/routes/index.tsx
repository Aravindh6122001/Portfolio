import { useRoutes } from "react-router-dom";
// import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { commonRoutes } from "./common";
// import { useAuth } from "@hooks/useAuth";

export const AppRoutes = () => {
  const isSignIn = true;

  const routes = isSignIn ? publicRoutes : commonRoutes;
  const element = useRoutes(routes);

  return <>{element}</>;
};
