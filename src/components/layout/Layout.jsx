import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

 function Layout() {
  return (
    <>
      <Navbar />

      <main className="py-8 px-12 mt-20">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;