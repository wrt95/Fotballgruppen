import { ReactElement } from "react";
import classes from "./TeamOverview.module.css";
import { Match } from "../../types/Match";
import { LeagueTableItem } from "../../types/LeagueTableItem";
import { womenTeamWLMatches } from "../../data/womensTeam/womenTeamWLMatches";
import { womenWLTable } from "../../data/womensTeam/womenWLTable";
import { menTeamWLMatches } from "../../data/mensTeam/menTeamWLMatches";
import { menWLTable } from "../../data/mensTeam/menWLTable";
import { Card } from "../Card";
import { MatchOverview } from "../MatchOverview";
import { LeagueTable } from "../LeagueTable";

type TeamOverviewProps = {
  team: "women" | "men";
};

export const TeamOverview = ({ team }: TeamOverviewProps): ReactElement => {
  const isWomanTeam: boolean = team === "women";

  const matches: Match[] = isWomanTeam ? womenTeamWLMatches : menTeamWLMatches;
  const tableData: LeagueTableItem[] = isWomanTeam ? womenWLTable : menWLTable;

  return (
    <div className={classes.wrapper}>
      <Card title="Match Overview">
        <MatchOverview matches={matches} />
      </Card>
      <Card title="League Table">
        <LeagueTable table={tableData} />
      </Card>
    </div>
  );
};
