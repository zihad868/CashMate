import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-135px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
