import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <>
        {window.location.pathname !== "/" && <Navbar />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </>
  );
}
