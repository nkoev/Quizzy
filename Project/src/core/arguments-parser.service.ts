import minimist from 'minimist';
import { join } from 'path';
import { CommandParameters } from './../types/command-parameters/command-parameters';
import { IArgumentsParser } from './../types/core/arguments-parser';

export class ArgumentsParser implements IArgumentsParser {

  private readonly _arguments: CommandParameters;
  private readonly _command: string;

  constructor() {
    const args = minimist(process.argv.slice(2));

    // Get the command name
    this._command = args._[0];

    // Initialize the parsed _arguments object
    this._arguments = {};

    // if (args.js) {
    //   this._arguments.js = true;
    // }

    // Use in case working with files, this will parse the correct filepath
    // If (args.filename) {
    //   This._arguments.filename = join(process.cwd(), args.filename);
    // }
  }

  public get arguments(): CommandParameters {
    return this._arguments;
  }

  public get command(): string {
    return this._command;
  }

}
