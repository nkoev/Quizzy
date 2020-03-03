import minimist from 'minimist';
import { join } from 'path';
import { CommandParameters } from './../types/command-parameters/command-parameters';
import { IArgumentsParser } from './../types/core/arguments-parser';

export class ArgumentsParser implements IArgumentsParser {

  private readonly _arguments: CommandParameters;
  private readonly _command: string;

  constructor() {
    const args: minimist.ParsedArgs = minimist(process.argv.slice(2));

    this._command = args._[0];

    this._arguments = {};

    if (args.answers) {
      this._arguments.answers = true;
    }

    if (args.wiki) {
      this._arguments.wiki = args.wiki;
    }
  }

  // tslint:disable-next-line: no-banned-terms
  public get arguments(): CommandParameters {
    return this._arguments;
  }

  public get command(): string {
    return this._command;
  }

}
