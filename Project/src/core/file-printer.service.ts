import fs from 'fs';
import { IPrinter } from './../types/core/printer';

export class FilePrinter implements IPrinter {

  constructor() { }

  public print(items: any[], filename: string) {
    try {
      fs.writeFileSync(filename, items.map(String).join('\n'), 'utf8');
    } catch (error) {
      throw new Error(`There was a problem writing the output to ${filename}.`);
    }
  }

}
