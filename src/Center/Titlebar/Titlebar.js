import classes from "./Titlebar.module.css";

export default function Titlebar() {
  return (
    <div className={classes.titleBar}>
      <div className={classes.titleLeftHeading}>Cloudstorage</div>
      <div className={classes.titleRightHeading}>TU</div>
    </div>
  );
}
