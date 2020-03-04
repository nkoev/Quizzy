import minimist from 'minimist';
import { CommandContainer } from '../commands/commands-container';
import { Injectable } from '../tools/decorators/injectable';
import { CommandParameters } from './../types/command-parameters/command-parameters';
import { IArgumentsParser } from './../types/core/arguments-parser';
import { ConsolePrinter } from './console-printer.service';

@Injectable()
export class ArgumentsParser implements IArgumentsParser {

  private readonly _arguments: CommandParameters;
  private readonly _command: string;

  constructor(
    private readonly printer: ConsolePrinter,
    private readonly commandContainer: CommandContainer
  ) {

    const args: minimist.ParsedArgs = minimist(process.argv.slice(2));
    const commands: string[] = Object.keys(this.commandContainer);

    if (!commands.includes(args._[0])) {
      this.printer.print('Unknown command. Available commands are: play, check, help');
    }

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
