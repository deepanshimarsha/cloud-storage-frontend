import classes from "./FolderActionPanel.module.css";

export default function FolderActionPanel({ file, folder }) {
  return (
    <div className={classes.actionPanel}>
      <div className={classes.categoryAction}></div>
      <div className={classes.listAction}></div>

      <div className={classes.showFoldersLink}>
        {file ? "Show All Files" : "Show All Folders"}
      </div>
    </div>
  );
}
