import FolderHeadingAndActionsSection from "../FolderSection/FolderHeadingAndActionsSection/FolderHeadingAndActionsSection";

import FileListPanel from "./FileListPanel/FileListPanel";
import FilePropertiesPanel from "./FilePropertiesPanel/FilePropertiesPanel";
import classes from "./FileSection.module.css";
import PopupModalForm from "./PopupModalForm";
import SelectedFolderAndAddFileBtn from "./SelectedFolderAndAddFileBtn/SelectedFolderAndAddFileBtn";

export default function FileSection({ selectedFolder }) {
  return (
    <div className={classes.fileSection}>
      <FolderHeadingAndActionsSection file={true} />
      <SelectedFolderAndAddFileBtn selectedFolder={selectedFolder} />
      <FilePropertiesPanel />
      <FileListPanel selectedFolder={selectedFolder} />
    </div>
  );
}
