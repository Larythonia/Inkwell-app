import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

 function Layout() {
  return (
    <>
      <Navbar />

      <main className="p-25">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;