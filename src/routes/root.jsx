import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";

export default function Root() {
  return (
    <>
      <div className="px-4 bg-red-400 h-screen">
        <NavBar></NavBar>

        <div id="contenido" className="px-8 h-full" >
          <Outlet />
        </div>
      </div>
    </>
  );
}
