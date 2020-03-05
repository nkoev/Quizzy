import { CommandParameters } from './../command-parameters/command-parameters';

export interface IArgumentsParser {
  // tslint:disable-next-line: no-banned-terms
  arguments: CommandParameters;
  command: string;
}
