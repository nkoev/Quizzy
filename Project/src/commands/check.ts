import { ExecutionResult } from '../types/execution-result';
import { ConsolePrinter } from './../core/console-printer.service';
import { ICommand } from './../types/command';

export class CheckCommand implements ICommand {

  private readonly printer: ConsolePrinter = new ConsolePrinter();

  public async execute(): Promise<ExecutionResult> {
    this.printer.print(
      `
      Your cli documentation here...
      `
    );

    return { errors: 0, message: undefined };
  }

}
