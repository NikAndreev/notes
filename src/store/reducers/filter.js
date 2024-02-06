const defaultState = {
  filter: "all",
};

const SET_FILTER = "SET_FILTER";

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const setFilterAction = (payload) => ({ type: SET_FILTER, payload });
