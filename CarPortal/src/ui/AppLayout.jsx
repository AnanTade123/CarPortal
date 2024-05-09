import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../components/navbars/StickyNavbar";

import FooterF from "../components/Footer";

const AppLayout = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <nav>
          <StickyNavbar />
        </nav>
        <main className="flex-grow  ">
          <Outlet />
        </main>
        <FooterF />
      </div>
    </div>
  );
};

export default AppLayout;
