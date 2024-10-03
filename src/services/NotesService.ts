import axios, { AxiosResponse } from "axios";

import type { INote } from "../types/note";

export default class NotesService {
  static async getAll(): Promise<AxiosResponse<INote[]>> {
    return axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
    });
  }
}
