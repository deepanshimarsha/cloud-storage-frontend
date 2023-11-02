import classes from "./FolderPills.module.css";
import {
  deleteFolder,
  renameFolder,
  getFiles,
} from "../../../../../actions/folderActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function FolderPills({ folder, setSelectedFolder }) {
  const dispatch = useDispatch();
  const [renamedFolderName, setRenamedFolderName] = useState(folder.name);
  const [edit, setEdit] = useState(false);

  const handleFolderDelete = () => {
    dispatch(deleteFolder(folder._id));
  };

  const handleEditFolderName = (e) => {
    setRenamedFolderName(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(renameFolder(folder._id, { name: renamedFolderName }));
      setEdit(false);
    }
  };

  const handleFolderClick = () => {
    setSelectedFolder({ folderId: folder._id });
    dispatch(getFiles(folder._id));
  };

  const editModeOn = () => {
    setEdit(true);
  };
  return (
    <div className={classes.folderPill}>
      <div className={classes.folderPillLeft}>
        <div className={classes.folderIcon}></div>
        <div className={classes.folderName}>
          {!edit ? (
            <div onClick={handleFolderClick}>{folder.name}</div>
          ) : (
            <input
              value={renamedFolderName}
              type="text"
              onChange={(e) => handleEditFolderName(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          )}
        </div>
      </div>
      <div className={classes.folderPillRight}>
        <div className={classes.threeDotDropDown}>
          <div className={classes.dropDownContent}>
            <div onClick={handleFolderDelete}>Delete</div>
            <div onClick={editModeOn}>Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
