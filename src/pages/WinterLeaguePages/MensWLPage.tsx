import { TeamOverview } from "../../components/TeamOverview";
import classes from "./WinterLeaguePages.module.css";

export const MensWLPage = () => (
  <div>
    <h1 className={classes.header}>Winter League Men's Team</h1>
    <TeamOverview team="men" />
  </div>
);
