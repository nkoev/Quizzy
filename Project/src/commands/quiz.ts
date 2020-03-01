import inquirer from 'inquirer';
import { correctAnswers } from '../common/correct-answers';
import { questions } from '../common/questions';
import { ConsolePrinter } from '../core/console-printer.service';
import { QuestionGenerator } from '../core/question-generator.service';
import { ExecutionResult } from '../types/execution-result';
import { ICommand } from './../types/command';

export class QuizCommand implements ICommand {

  private readonly printer: ConsolePrinter = new ConsolePrinter();

  public async execute(): Promise<ExecutionResult> {
    const answers: any =
    await inquirer.prompt(
      this.buildQuiz()
    );
    this.printer.print(
    this.checkResult(answers)
    );

    return { errors: 0, message: undefined };
  }

  private buildQuiz(): QuestionGenerator[] {
    return Object.keys(questions)
    .map((key: string): QuestionGenerator => new QuestionGenerator(key, questions[key]));
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
    `
    You have ${wrong} wrong answer(s).
    TRY AGAIN!` :
    `
    CONGRATULATIONS!
    You are the best!`;
  }
}
