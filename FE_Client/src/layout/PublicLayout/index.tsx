import { Outlet } from "react-router-dom";
import { Suspense } from "../../provider/Suspense";
// import edp from "../../../assets/images/edp.svg";
// import signup from "../../../assets/images/signup_image.png";
export const PublicLayout = () => {
  return (
    <div className="px-24">
      <div className="mt-10">
        <h3>uygug</h3>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
        {/* <div className="mt-6">
          <img src={signup} height={400} width={400} />
        </div> */}
      </div>
    </div>
  );
};
