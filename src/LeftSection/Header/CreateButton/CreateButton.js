import classes from "./CreateButton.module.css";
import { createFolder } from "../../../actions/folderActions";
import { useDispatch } from "react-redux";

export default function CreateButton() {
  const dispatch = useDispatch();
  const handleFolderCreate = () => {
    dispatch(createFolder());
  };
  return (
    <div className={classes.createBtn} onClick={handleFolderCreate}>
      <span className={classes.editIcon}></span>
      <span className={classes.text}>Create New</span>
    </div>
  );
}
