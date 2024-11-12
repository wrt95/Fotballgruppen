import React, { ReactElement } from "react";
import classes from "./TeamOverview.module.css";
import { Match } from "../../types/Match";
import { LeagueTable } from "../../types/LeagueTable";
import { womenTeamWLMatches } from "../../data/womensTeam/womenTeamWLMatches";
import { womenWLTable } from "../../data/womensTeam/womenWLTable";
import { menTeamWLMatches } from "../../data/mensTeam/menTeamWLMatches";
import { menWLTable } from "../../data/mensTeam/menWLTable";

type TeamOverviewProps = {
  team: "women" | "men";
};

export const TeamOverview = ({ team }: TeamOverviewProps): ReactElement => {
  const isWomanTeam: boolean = team === "women";

  const matches: Match[] = isWomanTeam ? womenTeamWLMatches : menTeamWLMatches;
  const tableData: LeagueTable[] = isWomanTeam ? womenWLTable : menWLTable;

  return (
    <div className={classes.teamOverview}>
      <div className={classes.matches}>
        <h2 className={classes.sectionTitle}>Match Overview</h2>
        <table className={classes.matchTable}>
          <tbody>
            {matches.map((match) => (
              <React.Fragment key={match.id}>
                <tr>
                  <td colSpan={3} className={classes.matchDate}>
                    {match.date}, {match.time}
                  </td>
                </tr>
                <tr className={classes.matchRow}>
                  <td className={classes.teamNameHome}>{match.homeTeam}</td>
                  <td className={classes.score}>
                    {match.homeGoals} - {match.awayGoals}
                  </td>
                  <td className={classes.teamNameAway}>{match.awayTeam}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.table}>
        <h2 className={classes.sectionTitle}>League Table</h2>
        <table className={classes.leagueTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.tablePosition}</td>
                <td>{row.teamName}</td>
                <td>{row.played}</td>
                <td>{row.won}</td>
                <td>{row.drawn}</td>
                <td>{row.lost}</td>
                <td>{row.gf}</td>
                <td>{row.ga}</td>
                <td>{calculateGoalDifference(row)}</td>
                <td>{calculatePoints(row)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const calculatePoints = (tableItem: LeagueTable): number => {
  return tableItem.won * 3 + tableItem.drawn;
};

const calculateGoalDifference = (tableItem: LeagueTable): string => {
  const goalDifference: number = tableItem.gf - tableItem.ga;
  return `${goalDifference > 0 ? "+" : ""}${goalDifference}`;
};
