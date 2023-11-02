import Titlebar from "./Titlebar/Titlebar";
import classes from "./Center.module.css";
import Body from "./Body/Body";

export default function Center() {
  return (
    <div className={classes.centerSection}>
      <Titlebar />
      <Body />
    </div>
  );
}
