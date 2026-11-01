import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioAssistant from "../components/PortfolioAssistant";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      {/* Inside the router so its page links work without a reload */}
      <PortfolioAssistant />
    </div>
  );
};

export default RootLayout;
