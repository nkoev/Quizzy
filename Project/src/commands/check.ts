
import { ColorType } from '../common/colors';
import { correctAnswers } from '../common/correct-answers';
import { WikiKeys } from '../common/wiki-keys';
import { ArtFormatter } from '../core/art-formatter';
import { DataService } from '../core/data-service';
import { CheckParameters } from '../types/command-parameters/check-parameters';
import { ExecutionResult } from '../types/execution-result';
import { ConsolePrinter } from './../core/console-printer.service';
import { ICommand } from './../types/command';

export class CheckCommand implements ICommand {

  private readonly printer: ConsolePrinter = new ConsolePrinter();
  private readonly formatter: ArtFormatter = new ArtFormatter();
  private readonly dataService: DataService = new DataService();

  public async execute({answers = false, wiki}: CheckParameters): Promise<ExecutionResult> {

    this.printer.print(
      this.formatter.format('Quizz!', ColorType.Yellow)
    );
    if (wiki) {
      const printable: string = await this.dataService.getWikiData(WikiKeys[wiki]);
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
  }
}
