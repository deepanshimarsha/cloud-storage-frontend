import classes from "./FilePropertiesPanel.module.css";

export default function FilePropertiesPanel() {
  return (
    <div className={classes.filePropertiesPanel}>
      <div className={classes.property}>Name</div>
      <div className={classes.property}>Owner</div>
      <div className={classes.property}>Last Opened</div>
      <div className={classes.settingIcon}></div>
    </div>
  );
}
