import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Awards from "../components/Awards/Awards";

export default function RootLayout() {
  return (
    <>
      <>
        {window.location.pathname !== "/" && <Navbar />}
        <main>
          <Outlet />
          <Awards />
        </main>
        <Footer />
      </>
    </>
  );
}
