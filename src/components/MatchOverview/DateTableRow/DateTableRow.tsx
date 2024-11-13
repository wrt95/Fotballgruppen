import { ReactElement } from "react";
import classes from "./DateTableRow.module.css";
import { Match } from "../../../types/Match";

type DateTableRowProps = {
  match: Match;
};

export const DateTableRow = ({ match }: DateTableRowProps): ReactElement => {
  return (
    <tr>
      <td colSpan={3} className={classes.matchDate}>
        {match.date}, {match.time}
      </td>
    </tr>
  );
};
