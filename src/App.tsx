import { AppRoutes } from "./routes/AppRoutes";
import classes from "./App.module.css";

export const App = () => {
  return (
    <div className={classes.app}>
      <AppRoutes />
    </div>
  );
};
