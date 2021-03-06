import { Injectable } from '../tools/decorators/injectable';
import { ExecutionResult } from '../types/execution-result';
import { ConsolePrinter } from './../core/console-printer.service';
import { ICommand } from './../types/command';

@Injectable()
export class HelpCommand implements ICommand {

  public constructor(
    private readonly printer: ConsolePrinter
  ) { }

  public async execute(): Promise<ExecutionResult> {
    this.printer.print(
      `
      Usage: quizzy <command>

      where <command> is one of:
        play, check, help

      quizzy help                 prints this manual

      quizzy play                 Starts a new quiz of consecutive questions.
                                  Currently only OOP quiz is available and no need to pass any arguments.

      quizzy check                Shows additional information depending on the arguments passed.
        arguments:
          --answers               Shows correct answers
          --wiki=<string>         Shows Wikipedia extract on one of the OOP principles
                                  (inheritance / encapsulation / abstraction / polymorphism)

        example:
          quizzy check --wiki=inheritance
      `
    );

    return { errors: 0, message: undefined };
  }

}
