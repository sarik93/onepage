import axios from "axios";
import {
  AxiosCacheInstance,
  CacheOptions,
  setupCache,
} from "axios-cache-interceptor";
import { BASE_URL, ENDPOINTS, DEFAULTS } from "../constants/api";

type ObjectValue<T> = T[keyof T];
type Endpoint = ObjectValue<typeof ENDPOINTS>;

export interface ClientArgs {
  cacheOptions?: CacheOptions;
  baseURL?: string;
}

export class ApiClient {
  private api: AxiosCacheInstance;

  constructor(clientOptions?: ClientArgs) {
    this.api = setupCache(
      axios.create({
        baseURL: clientOptions?.baseURL ?? BASE_URL.REST,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      clientOptions?.cacheOptions,
    );
  }
  protected async createResource<T>(
    endpoint: string,
    data?: unknown,
  ): Promise<T> {
    return (await this.api.post<T>(`${endpoint}`, data)).data;
  }
  protected async editResource<T>(
    endpoint: string,
    identifier?: string | number,
    data?: unknown,
  ): Promise<T> {
    return (
      await this.api.put<T>(
        `${endpoint}/${identifier || identifier === 0 ? identifier : ""}`,
        data,
      )
    ).data;
  }

  protected async getResource<T>(
    endpoint: string,
    identifier?: string | number,
  ): Promise<T> {
    return (
      await this.api.get<T>(
        `${endpoint}/${identifier || identifier === 0 ? identifier : ""}`,
      )
    ).data;
  }

  protected async getListResource<T>(
    endpoint: Endpoint,
    offset = 0,
    limit = DEFAULTS.LIST_LIMIT,
  ): Promise<T> {
    return (
      await this.api.get<T>(`${endpoint}?offset=${offset}&limit=${limit}`)
    ).data;
  }
}
