import api from "../api";
import { AxiosResponse } from "axios";

import type { INote } from "../types/notes";

export default class NotesService {
  static async getAll(): Promise<AxiosResponse<INote[]>> {
    return api({
      method: "get",
      url: "/todos?_limit=5",
    });
  }
}
