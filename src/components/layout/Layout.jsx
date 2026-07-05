import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

console.log("LAYOUT RENDERING");
 function Layout() {
  return (
    <>
      <Navbar />

      <main className=" min-w-[80vw] py-25 px-30">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;