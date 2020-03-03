import fetch from 'node-fetch';

export class DataService {

  public getWikiData: (keyword: string) => Promise<any> = async (keyword): Promise<any> => {
    try {
    const response: any =
    await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${keyword}&formatversion=2&exsentences=3&exlimit=1&explaintext=1`);
    const toJson: any = await response.json();

    return toJson.query.pages[0].extract;
    } catch (err) {
      console.log(err.message);
    }
  }
}
