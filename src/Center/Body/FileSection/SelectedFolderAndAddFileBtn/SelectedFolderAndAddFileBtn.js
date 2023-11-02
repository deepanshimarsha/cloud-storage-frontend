import classes from "./SelectedFolderAndAddFileBtn.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uploadToFolder } from "../../../../actions/folderActions";
import FileUplaodForm from "./FileUplaodForm/FileUplaodForm";

export default function SelectedFolderAndAddFileBtn({ selectedFolder }) {
  const { folders } = useSelector((state) => state.folders);

  const folderFileDisplayed = folders.find(
    ({ _id }) => selectedFolder.folderId === _id
  );

  return (
    <span className={classes.folderFileDisplayedName}>
      {/* {folderFileDisplayed && <span>{folderFileDisplayed.name}</span>} */}
      {folderFileDisplayed && (
        <FileUplaodForm selectedFolder={selectedFolder} />
      )}
    </span>
  );
}
