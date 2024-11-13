import { TeamOverview } from "../../components/TeamOverview";
import classes from "./WinterLeaguePages.module.css";

export const WomensWLPage = () => (
  <div>
    <h1 className={classes.header}>Winter League Women's Team</h1>
    <TeamOverview team="women" />
  </div>
);
