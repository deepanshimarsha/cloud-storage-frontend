import axios from "axios";
import {
  CREATE_FOLDER_SUCCESS,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_LOADING,
  DELETE_FOLDER_SUCCESS,
  RENAME_FOLDER_SUCCESS,
  UPLOAD_TO_FOLDER_SUCCESS,
  GET_FILES,
} from "./folderActionTypes";

export const getFolders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOLDER_LOADING });
    const response = await axios.get("http://localhost:8000/api/folders");
    dispatch({ type: GET_FOLDER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching folders:", error);
  }
};

export const createFolder = (folder) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/folders",
      folder
    );

    dispatch({ type: CREATE_FOLDER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error creating folder:", error);
  }
};

export const renameFolder = (folderIdx, changedName) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/folders/${folderIdx}`,
      changedName
    );

    dispatch({ type: RENAME_FOLDER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error renaming folder:", error);
  }
};

export const uploadToFolder = (folderId, file) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/folders/${folderId}/files`,
      file
    );

    dispatch({
      type: UPLOAD_TO_FOLDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error uploading to folder:", error);
  }
};

export const deleteFolder = (folderIdx) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/folders/${folderIdx}`
    );
    dispatch({ type: DELETE_FOLDER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error deleting folder:", error);
  }
};

export const getFiles = (folderId) => async (dispatch) => {
  try {
    dispatch({ type: GET_FILES });
    const response = await axios.get(
      `http://localhost:8000/api/folders/${folderId}/files`
    );
    dispatch({ type: GET_FILES, payload: response.data });
  } catch (error) {
    console.error("Error fetching folders:", error);
  }
};
