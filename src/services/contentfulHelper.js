import {  createClient } from 'contentful-management';



const CONTENT_MANAGEMENT_TOKEN = "CFPAT-nNKy6WQGgarKDwSc0xxORKz_wxAqhYR2mQW_XfkEcmg";
export const ACCESS_TOKEN = "HmNlq04pEUzTlTC-KeUDbYMjy7ALQDhTU0DK3DlBqKs";
const SPACE_ID = "mi2376gvz0ix";
export const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

const client = createClient({
  accessToken: CONTENT_MANAGEMENT_TOKEN
})


const ContentfulHelper = {
  client,
  environment: (async () => {
    const space = await client.getSpace(SPACE_ID);
    return space.getEnvironment('master');
  })(),
  async retriveEntry() {
    try {
      const entry = await this.environment.then(e => e.getEntries());
      return entry;
    } catch (e) {
      throw new Error('error leyendo los entry:' + e);
    }
  },

  async createEntry(contentTypeId,data) {
    try {
      const entry = await this.environment.then(e => e.createEntry(contentTypeId, { fields: data }));
      return entry
    } catch (e) {
      throw new Error('error creating movie entry:' + e);

    }
  },

  async publishEntry(entry) {
    try {
      return await entry.publish();
    } catch (e) {
      throw new Error('error publishing movie entry:' + e);
    }
  },

  async retriveAllAssets() {
    return await this.environment.then(e => e.getAssets());
  },

  async createAsset(asset) {
    try {
      const assetCreated = await this.environment.then(e => e.createAsset(asset))
      return await assetCreated.processForAllLocales().then(a => a.publish());
    } catch (err) {
      throw new Error('error creating asset ' + err)
    }
  }, 

}


export const contentfulHelper = Object.freeze(ContentfulHelper);
