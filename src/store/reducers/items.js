const defaultState = {
  items: [],
};

const SET_ITEMS = "SET_ITEMS";
const CLEAR_ITEMS = "CLEAR_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const MOVE_ITEM = "MOVE_ITEM";

export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case CLEAR_ITEMS:
      return { ...state, items: [] };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    case MOVE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload[0].id) {
            return {
              ...item,
              order: action.payload[1].order,
            };
          }

          if (item.id === action.payload[1].id) {
            return {
              ...item,
              order: action.payload[0].order,
            };
          }

          return item;
        }),
      };
    default:
      return state;
  }
};

export const setItemsAction = (payload) => ({ type: SET_ITEMS, payload });
export const clearItemsAction = () => ({ type: CLEAR_ITEMS });
export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const removeItemAction = (payload) => ({ type: REMOVE_ITEM, payload });
export const toggleItemAction = (payload) => ({ type: TOGGLE_ITEM, payload });
export const moveItemAction = (payload) => ({ type: MOVE_ITEM, payload });
