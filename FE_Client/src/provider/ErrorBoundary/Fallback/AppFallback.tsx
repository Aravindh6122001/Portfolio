import type { FC } from "react";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

/**
 * @package
 */
export const AppFallback: FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>An error has occurred.</p>
      <p>{error.message}</p>
      <button onClick={onReload}>Reload or Refresh</button>
    </div>
  );
};

const onReload = () => {
  window.location.assign(window.location.origin);
};
