import { correctAnswers } from '../common/correct-answers';
import { FormatterService } from '../core/formatter.service';
import { CheckParameters } from '../types/command-parameters/check-parameters';
import { ExecutionResult } from '../types/execution-result';
import { ConsolePrinter } from './../core/console-printer.service';
import { ICommand } from './../types/command';

export class CheckCommand implements ICommand {

  private readonly printer: ConsolePrinter = new ConsolePrinter();
  private readonly formatter: FormatterService = new FormatterService();

  public async execute({answers = false}: CheckParameters): Promise<ExecutionResult> {
    if (answers) {
      correctAnswers.forEach(
        (el: string, index: number): void => {
        this.printer.print(`${index + 1} ${el}`);
        });
    }

    return { errors: 0, message: undefined };
  }
}
