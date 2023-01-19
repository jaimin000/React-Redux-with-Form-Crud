import { FORM_ADDING_DATA, FORM_DELETING_DATA ,FORM_EDITING_DATA} from "../type/types";

const initialState = {
  data: [],
};

const addDataReducer = (state = initialState, action) => {
  console.log(
    "🚀 ~ file: addDataReducer.js:11 ~ demoDataReducer ~ action",
    action
  );

  switch (action.type) {
    case FORM_ADDING_DATA:
      return {
        data: [...state.data, action.payload],
      };
      case FORM_EDITING_DATA:
      return {
        data:  action.payload,
      };
    case FORM_DELETING_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default addDataReducer;
