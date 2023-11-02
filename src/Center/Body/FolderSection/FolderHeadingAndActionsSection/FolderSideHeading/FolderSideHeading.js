import classes from "./FolderSideHeading.module.css";
import folderIcon from "../../../../../assets/images/folderIcon.png";
import fileIcon from "../../../../../assets/images/fileIcon.png";

export default function FolderSideHeading({ file, folder }) {
  return (
    <div className={classes.folderSideHaedingContainer}>
      <img
        src={folder ? folderIcon : fileIcon}
        alt="icon"
        className={classes.folderIcon}
      />
      <div className={classes.folderSideHaeding}>
        {file ? (
          <div className={classes.fileSectionSideHeading}>
            <div>Files</div>
          </div>
        ) : (
          "Folders"
        )}
      </div>
    </div>
  );
}
