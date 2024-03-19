import { ENDPOINTS } from "../constants/api";
import { SiteElement } from "./models/site";
import { ApiClient } from "./base";

export class ElementApiClient extends ApiClient {
  /**
   * Edit Element
   * @param data Element data
   * @returns An Element
   */
  public async editElement(
    id: number,
    data: SiteElement,
  ): Promise<SiteElement> {
    return this.editResource(ENDPOINTS.ELEMENT, id, data);
  }
}

export default new ElementApiClient();
