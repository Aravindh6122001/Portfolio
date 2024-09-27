import type { FC, SuspenseProps } from "react";
import { Suspense as ReactSuspense } from "react";
// import { Indicator } from "../../shared/molecules/Indicator";

export const Suspense: FC<SuspenseProps> = ({
  children,
  // fallback = <Indicator />,
}) => {
  return <ReactSuspense>{children}</ReactSuspense>;
};
