import { ENDPOINTS } from "../constants/api";
import { Site } from "./models/site";
import { ApiClient } from "./base";

export class SiteApiClient extends ApiClient {
  /**
   * Get an Site by it's ID
   * @param id The Site ID
   * @returns An Site
   */
  public async getSiteById(id: number): Promise<Site> {
    return this.getResource(ENDPOINTS.SITE, id);
  }
  /**
   * Edit Site
   * @param data Site data
   * @returns An Site
   */
  public async editSite(data: Site): Promise<Site> {
    return this.editResource(ENDPOINTS.SITE, data.id, data);
  }
}

export default new SiteApiClient();
