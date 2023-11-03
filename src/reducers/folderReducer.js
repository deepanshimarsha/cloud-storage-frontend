import {
  CREATE_FOLDER_SUCCESS,
  GET_FOLDER_FAILURE,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_LOADING,
  DELETE_FOLDER_SUCCESS,
  RENAME_FOLDER_SUCCESS,
  UPLOAD_TO_FOLDER_SUCCESS,
  GET_FILES,
} from "../actions/folderActionTypes";

// Reducer function
const initialState = {
  folders: [],
  files: [],
  loading: false,
};
const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDER_SUCCESS:
      return {
        ...state,
        folders: action.payload,
        loading: false,
      };

    case GET_FOLDER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CREATE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };

    case RENAME_FOLDER_SUCCESS:
      return {
        ...state,
        folders: state.folders.map((folder) => {
          if (folder._id === action.payload._id) {
            return action.payload;
          } else {
            return folder;
          }
        }),
      };

    case GET_FILES:
      return {
        ...state,
        files: action.payload,
      };
    case UPLOAD_TO_FOLDER_SUCCESS:
      return {
        ...state,
        folders: state.folders.map((folder) => {
          if (folder._id === action.payload._id) {
            return action.payload;
          } else {
            return folder;
          }
        }),
        files: action.payload.files,
      };
    case DELETE_FOLDER_SUCCESS:
      return {
        ...state,
        error: null,
        folders: state.folders.filter(
          (folder) => folder._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default folderReducer;
