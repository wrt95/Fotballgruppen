import { ReactElement, ReactNode } from "react";
import classes from "./Card.module.css";

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps): ReactElement => {
  return (
    <div className={classes.cardWrapper}>
      <h2 className={classes.cardTitle}>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
