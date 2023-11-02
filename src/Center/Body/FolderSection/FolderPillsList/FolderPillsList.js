import FolderPills from "./FolderPills/FolderPills";
import FolderPillsListScrollArrow from "./FolderPillsListScrollArrow/FolderPillsListScrollArrow";
import classes from "./FolderPillsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFolders } from "../../../../actions/folderActions";
import FileSection from "../../FileSection/FileSection";

export default function FolderPillsList() {
  const { folders, loading } = useSelector((state) => state.folders);
  const [selectedFolder, setSelectedFolder] = useState({
    folderId: null,
  });
  console.log(selectedFolder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.folderListPanel}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className={classes.folderList}>
            {folders.slice(0, 3).map((folder) => {
              return (
                <FolderPills
                  key={folder._id}
                  folder={folder}
                  selectedFolder={selectedFolder}
                  setSelectedFolder={setSelectedFolder}
                />
              );
            })}
          </div>
        )}

        <FolderPillsListScrollArrow />
      </div>
      <FileSection selectedFolder={selectedFolder} />
    </div>
  );
}
