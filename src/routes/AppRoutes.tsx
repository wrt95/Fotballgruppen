import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { WomensWLPage, MensWLPage } from "../pages/WinterLeaguePages";
import { RoutePaths } from "./routePaths";

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={RoutePaths.ROOT} element={<LandingPage />} />
      <Route
        path={RoutePaths.WOMENS_TEAM_WINTER_LEAGUE}
        element={<WomensWLPage />}
      />
      <Route
        path={RoutePaths.MENS_TEAM_WINTER_LEAGUE}
        element={<MensWLPage />}
      />
    </Routes>
  </Router>
);
