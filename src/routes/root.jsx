import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";

export default function Root() {
  return (
    
      <div className="lg:px-4 bg-slate-50 h-screen">
        <NavBar></NavBar>

        <div id="contenido" className="min-h-min lg:h-4/5 mt-4" >
          <Outlet />
        </div>
      </div>
    
  );
}
