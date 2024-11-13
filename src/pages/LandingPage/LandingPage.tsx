import { Link } from "react-router-dom";
import classes from "./LandingPage.module.css";
import { RoutePaths } from "../../routes/routePaths";

export const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <h1 className={classes.title}>Fotballgruppen Accenture Norway</h1>
      <p className={classes.description}>
        Explore the latest updates from our group.
      </p>
      <div className={classes.buttonGroup}>
        <Link
          to={RoutePaths.WOMENS_TEAM_WINTER_LEAGUE}
          className={classes.teamButton}
        >
          Winter League Women's Team
        </Link>
        <Link
          to={RoutePaths.MENS_TEAM_WINTER_LEAGUE}
          className={classes.teamButton}
        >
          Winter League Men's Team
        </Link>
      </div>
    </div>
  );
};
