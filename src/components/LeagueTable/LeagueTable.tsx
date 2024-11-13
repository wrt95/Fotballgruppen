import { ReactElement } from "react";
import classes from "./LeagueTable.module.css";
import { LeagueTableItem } from "../../types/LeagueTableItem";
import {
  calculateGoalDifference,
  calculatePoints,
} from "../../utils/leagueTableUtils";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MEDIA_QUERY_MAX_WIDTH } from "../../constants";

type LeagueTableProps = {
  table: LeagueTableItem[];
};

export const LeagueTable = ({ table }: LeagueTableProps): ReactElement => {
  const isLargeScreen: boolean = !useMediaQuery(MEDIA_QUERY_MAX_WIDTH);
  return (
    <table className={classes.leagueTable}>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          {isLargeScreen && (
            <>
              <th>GF</th>
              <th>GA</th>
            </>
          )}
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {table.map((tableItem: LeagueTableItem, index) => (
          <tr key={index}>
            <td>{tableItem.tablePosition}</td>
            <td>{tableItem.teamName}</td>
            <td>{tableItem.played}</td>
            <td>{tableItem.won}</td>
            <td>{tableItem.drawn}</td>
            <td>{tableItem.lost}</td>
            {isLargeScreen && (
              <>
                <td>{tableItem.gf}</td>
                <td>{tableItem.ga}</td>
                <td>{calculateGoalDifference(tableItem)}</td>
              </>
            )}
            {!isLargeScreen && (
              <td>
                {tableItem.gf}-{tableItem.ga}
              </td>
            )}
            <td>{calculatePoints(tableItem)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
