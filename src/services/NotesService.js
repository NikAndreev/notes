import axios from "axios";

export default class NotesService {
  static async getAll() {
    return axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
    });
  }
}
