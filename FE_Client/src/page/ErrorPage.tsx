import { Link } from "react-router-dom";
import Tryagain from "../../assets/gif/TryAgain.gif";

/**
 * @package
 */
const ErrorPage = () => {
  return (
    <main className="h-[90vh] w-full flex flex-col items-center justify-center">
      <img
        src={Tryagain}
        alt="tryagin.gif"
        style={{ width: "350px", height: "350px" }}
      />
      <h6>Something went wrong</h6>
      <h1>Try again in sometime</h1>
    </main>
  );
};

export default ErrorPage;
