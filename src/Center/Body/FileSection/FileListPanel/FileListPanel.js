import FileDetailsCard from "./FileDetailsCard/FileDetailsCard";
import classes from "./FileListPanel.module.css";
import { useSelector } from "react-redux";

export default function FileListPanel({ selectedFolder }) {
  const { files } = useSelector((state) => state.folders);

  return (
    <div className={classes.fileListPanel}>
      {selectedFolder.folderId === null ? (
        <p>No folder selected</p>
      ) : files == null || files.length == 0 ? (
        <p>No files</p>
      ) : (
        files.map((file) => {
          return <FileDetailsCard key={file._id} file={file} />;
        })
      )}
    </div>
  );
}
