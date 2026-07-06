import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

 function Layout() {
  return (
    <>
      <Navbar />

      <main className="py-10 px-20">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;