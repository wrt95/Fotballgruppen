import { LeagueTableItem } from "../types/LeagueTableItem";

export const calculatePoints = (tableItem: LeagueTableItem): number => {
  return tableItem.won * 3 + tableItem.drawn;
};

export const calculateGoalDifference = (tableItem: LeagueTableItem): string => {
  const goalDifference: number = tableItem.gf - tableItem.ga;
  return `${goalDifference > 0 ? "+" : ""}${goalDifference}`;
};
