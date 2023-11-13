import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import { Home } from "../home/home";
import { TimeToBurn } from "../time2burn/time2burn";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route index element={<Home />} />
      <Route path="/time2burn" element={<TimeToBurn />} />
    </Routes>
  );
};
