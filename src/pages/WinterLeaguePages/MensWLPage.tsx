import { TeamOverview } from "../../components/TeamOverview";
import classes from "./WinterLeaguePages.module.css";

export const MensWLPage = () => (
  <div className={classes.wrapper}>
    <h1>Winter League Men's Team</h1>
    <TeamOverview team="men" />
  </div>
);
