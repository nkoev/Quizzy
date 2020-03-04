
import { ColorType } from '../common/colors';
import { correctAnswers } from '../common/correct-answers';
import { WikiKeywords } from '../common/wiki-keywords';
import { ArtFormatter } from '../core/art-formatter';
import { WikiDataService } from '../core/data-service';
import { FormatterService } from '../core/formatter.service';
import { Injectable } from '../tools/decorators/injectable';
import { CheckParameters } from '../types/command-parameters/check-parameters';
import { ExecutionResult } from '../types/execution-result';
import { ConsolePrinter } from './../core/console-printer.service';
import { ICommand } from './../types/command';

@Injectable()
export class CheckCommand implements ICommand {

  public constructor(
    private readonly printer: ConsolePrinter,
    private readonly artFormatter: ArtFormatter,
    private readonly formatter: FormatterService,
    private readonly dataService: WikiDataService
  ) { }

  public async execute({ answers = false, wiki }: CheckParameters): Promise<ExecutionResult> {
    try {
      this.printer.print(
        this.artFormatter.format('Quizzy!', ColorType.Yellow)
      );
      if (wiki) {
        const printable: string = await this.dataService.getData(WikiKeywords[wiki]);
        this.printer.print(
          printable
        );
      }
      if (answers) {
        correctAnswers.forEach(
          (el: string, index: number): void => {
            this.printer.print(`${index + 1} ${el}`);
          });
      }

      return { errors: 0, message: undefined };
    } catch (err) {
      return {
        errors: 1,
        message: this.formatter.format(err.message, ColorType.Red)
      };
    }
  }
}
