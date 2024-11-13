import { TeamOverview } from "../../components/TeamOverview";
import classes from "./WinterLeaguePages.module.css";

export const WomensWLPage = () => (
  <div className={classes.wrapper}>
    <h1>Winter League Women's Team</h1>
    <TeamOverview team="women" />
  </div>
);
