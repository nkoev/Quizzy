import fetch from 'node-fetch';
import { WikiKeywords } from '../common/wiki-keywords';
import { IDataService } from '../types/core/data-service';

export class WikiDataService implements IDataService<WikiKeywords> {

  private readonly wikiURL: string = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&formatversion=2&exsentences=3&exlimit=1&explaintext=1`;

  public getData: (keyword: WikiKeywords) => Promise<string> = async (keyword): Promise<any> => {
    try {
      const response: any =
        await fetch(`${this.wikiURL}${keyword}`);
      const toJson: any = await response.json();

      return toJson.query.pages[0].extract;
    } catch (err) {
      console.log(err.message);
    }
  }
}
