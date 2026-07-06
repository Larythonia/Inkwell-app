import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

 function Layout() {
  return (
    <>
      <Navbar />

      <main className="py-25 px-30">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;