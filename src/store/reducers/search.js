const defaultState = {
  search: "",
};

const SET_SEARCH = "SET_SEARCH";

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const setSearchAction = (payload) => ({ type: SET_SEARCH, payload });
