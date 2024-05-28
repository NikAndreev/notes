import axios from "axios";
import { setItemsAction, setLoadingAction } from "../store/reducers/items";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
      });

      const normalizedData = result.data.map((item, index) => {
        return {
          id: item.id,
          title: item.title,
          isCompleted: item.completed,
          order: index,
        };
      });

      dispatch(setItemsAction(normalizedData));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
};
