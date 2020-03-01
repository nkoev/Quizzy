import { HelpCommand } from './help';
import { QuizCommand } from './quiz';

export class CommandContainer {

  constructor(
    public readonly help: HelpCommand = new HelpCommand,
    public readonly quiz: QuizCommand = new QuizCommand
    /* Your commands here */
  ) { }

}
