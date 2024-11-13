import React, { ReactElement } from "react";
import classes from "./MatchOverview.module.css";
import { Match } from "../../types/Match";
import { DateTableRow } from "./DateTableRow";

type MatchOverviewProps = {
  matches: Match[];
};

export const MatchOverview = ({
  matches,
}: MatchOverviewProps): ReactElement => {
  return (
    <table className={classes.matchTable}>
      <tbody>
        {matches.map((match) => (
          <React.Fragment key={match.id}>
            <DateTableRow match={match} />
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
  );
};
