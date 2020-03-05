import { IPrinter } from './../types/core/printer';

export class ConsolePrinter implements IPrinter {

  public print(...texts: string[]): void {
    console.log(...texts);
  }

}
