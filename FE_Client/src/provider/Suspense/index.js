import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense as ReactSuspense } from "react";
// import { Indicator } from "../../shared/molecules/Indicator";
export const Suspense = ({ children,
// fallback = <Indicator />,
 }) => {
    return _jsx(ReactSuspense, { children: children });
};
