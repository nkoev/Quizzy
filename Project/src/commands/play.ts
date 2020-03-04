import inquirer from 'inquirer';
import { ColorType } from '../common/colors';
import { correctAnswers } from '../common/correct-answers';
import { questions } from '../common/questions';
import { ArtFormatter } from '../core/art-formatter';
import { ConsolePrinter } from '../core/console-printer.service';
import { FormatterService } from '../core/formatter.service';
import { QuestionGenerator } from '../core/question-generator.service';
import { Injectable } from '../tools/decorators/injectable';
import { ICommand } from '../types/command';
import { IQuestionGenerator } from '../types/core/question-generator';
import { ExecutionResult } from '../types/execution-result';

@Injectable()
export class PlayCommand implements ICommand {

  public constructor(
    private readonly printer: ConsolePrinter,
    private readonly formatter: FormatterService,
    private readonly artFormatter: ArtFormatter
  ) { }

  public async execute(): Promise<ExecutionResult> {
    try {
      this.printer.print(
        this.artFormatter.format('Quizzy!', ColorType.Yellow),
      );

      const answers: { [key: string]: {} } =
        await inquirer.prompt(
          this.buildQuiz()
        );

      this.printer.print(
        this.checkResult(answers)
      );

      return { errors: 0, message: undefined };
    } catch (err) {
      return {
        errors: 1,
        message: this.formatter.format(err.message, ColorType.Red)
      };
    }
  }

  private buildQuiz(): IQuestionGenerator[] {
    return Object.keys(questions)
      .map((key: string): IQuestionGenerator => new QuestionGenerator(key, questions[key]));
  }

  private checkResult(answers: any): string {
    let wrong: number = 0;
    Object.values(answers)
      .forEach((answer: any, index: number): void => {
        if (answer !== correctAnswers[index]) {
          wrong += 1;
        }
      });

    return wrong > 0 ?

      this.formatter.format(
        `
    You have ${wrong} wrong answer(s).
    TRY AGAIN!`
        , ColorType.Red) :

      this.formatter.format(
        `
    CONGRATULATIONS!
    You are the best!`
        , ColorType.Green);
  }
}
