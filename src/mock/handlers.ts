import { http, HttpResponse, delay } from "msw";
import { BASE_URL, ENDPOINTS } from "../constants/api";

export const handlers = [
  http.put(`${BASE_URL.REST}/${ENDPOINTS.ELEMENT}/:id`, async () => {
    await delay();

    return HttpResponse.json({
      jsonrpc: "2.0",
      result: null,
      id: "3a20a3f3-42f9-46d6-86f1-368a5a540d9a",
    });
  }),
];
