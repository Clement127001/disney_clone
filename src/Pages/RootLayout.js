import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
