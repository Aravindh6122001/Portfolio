import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { LayoutFallback } from "./Fallback";
export const ErrorBoundary = ({ children, onReset, FallbackComponent }) => {
    return (_jsx(ReactErrorBoundary, { FallbackComponent: FallbackComponent || LayoutFallback, onReset: onReset, children: children }));
};
