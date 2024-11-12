import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { WomensWLPage } from "../pages/WomensWLPage";
import { MensWLPage } from "../pages/MensWLPage";
import { RoutePaths } from "./routePaths";

export const AppRoutes = () => (
  <Routes>
    <Route path={RoutePaths.ROOT} element={<LandingPage />} />
    <Route
      path={RoutePaths.WOMENS_TEAM_WINTER_LEAGUE}
      element={<WomensWLPage />}
    />
    <Route path={RoutePaths.MENS_TEAM_WINTER_LEAGUE} element={<MensWLPage />} />
  </Routes>
);
