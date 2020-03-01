import { HelpCommand } from './help';
import { QuizCommand } from './quiz';
import { CheckParameters } from '../types/command-parameters/check-parameters';
import { CheckCommand } from './check';
import { ArgumentsParser } from '../core/arguments-parser.service';

export class CommandContainer {

  constructor(
    public readonly help: HelpCommand = new HelpCommand,
    public readonly quiz: QuizCommand = new QuizCommand,
    public readonly check: CheckCommand = new CheckCommand
    /* Your commands here */
  ) { }

}
