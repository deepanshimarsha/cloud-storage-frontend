import classes from "./Body.module.css";
import CloudStorageSection from "./CloudStorageSection/CloudStorageSection";
import FileSection from "./FileSection/FileSection";
import FolderSection from "./FolderSection/FolderSection";

export default function Body() {
  return (
    <div className={classes.body}>
      <CloudStorageSection />
      <FolderSection />
      {/* <FileSection /> */}
    </div>
  );
}
