import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./FileUplaodForm.module.css";
import { uploadToFolder } from "../../../../../actions/folderActions";
import addIcon from "../../../../../assets/images/addIcon.png";
import { useDispatch, useSelector } from "react-redux";

export default function FileUplaodForm({ selectedFolder }) {
  const { folders } = useSelector((state) => state.folders);
  const [show, setShow] = useState(false);
  const [newFile, setNewFile] = useState({ name: "", owner: "", type: "" });
  const dispatch = useDispatch();

  const folderFileDisplayed = folders.find(
    ({ _id }) => selectedFolder.folderId === _id
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadToFolder(selectedFolder.folderId, newFile));

    handleClose();
  };

  return (
    <div>
      <div onClick={handleShow} className={classes.modalPopup}>
        <div className={classes.folderFileDisplayedName}>
          {" "}
          {folderFileDisplayed.name}
        </div>
        <img className={classes.addIcon} src={addIcon} alt="add-icon" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className={classes.fileForm}>
            {/* Add form fields here */}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="file name"
                onChange={(e) =>
                  setNewFile((newFile) => ({
                    ...newFile,
                    name: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="file owner"
                onChange={(e) =>
                  setNewFile((newFile) => ({
                    ...newFile,
                    owner: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                setNewFile((newFile) => ({
                  ...newFile,
                  type: e.target.value,
                }))
              }
            >
              <option defaultValue={true} disabled>
                Select file format
              </option>
              <option value="png">.png</option>
              <option value="pdf">.pdf</option>
              <option value="xls">.xls</option>
              <option value="mp4">.mp4</option>
              <option value="mp3">.mp3</option>
              <option value="ppt">.ppt</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
