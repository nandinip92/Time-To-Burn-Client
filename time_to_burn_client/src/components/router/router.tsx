import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import { Home } from "../home/home";
import { TimeToBurn } from "../time2burn/time2burn";
import { Activities } from "../activities/activities";
import NotFound from "../not_found/not_found";

export const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/time2burn" element={<TimeToBurn />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
