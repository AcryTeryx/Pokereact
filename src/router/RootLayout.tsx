import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BasicMenu from "../component/Menu";

export default function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking if user logged in");
  }, [navigate]);

  return (
    <>
    <BasicMenu />
      <Outlet />
    </>
  );
}