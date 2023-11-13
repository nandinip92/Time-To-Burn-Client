import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="time2BurnMain">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
