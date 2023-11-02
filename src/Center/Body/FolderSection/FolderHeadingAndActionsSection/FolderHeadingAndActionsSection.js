import FolderActionPanel from "./FolderActionPanel/FolderActionPanel";
import FolderSideHeading from "./FolderSideHeading/FolderSideHeading";
import classes from "./FolderHeadingAndActionsSection.module.css";
import FileFormatIcon from "../../FileSection/FileFormatIcons/FileFormatIcons";

export default function FolderHeadingAndActionsSection({ file, folder }) {
  return (
    <div className={classes.folderHeadingAndActionsSection}>
      <FolderSideHeading file={file} folder={folder} />
      {file && <FileFormatIcon />}
      <FolderActionPanel file={file} folder={folder} />
    </div>
  );
}
