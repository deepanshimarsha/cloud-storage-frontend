import FolderHeadingAndActionsSection from "./FolderHeadingAndActionsSection/FolderHeadingAndActionsSection";
import FolderPillsList from "./FolderPillsList/FolderPillsList";
import classes from "./FolderSection.module.css";

export default function FolderSection() {
  return (
    <div className={classes.folderSection}>
      <FolderHeadingAndActionsSection />
      <FolderPillsList />
    </div>
  );
}
