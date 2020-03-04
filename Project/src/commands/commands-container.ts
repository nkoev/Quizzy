import { CheckCommand } from './check';
import { HelpCommand } from './help';
import { PlayCommand } from './play';

export class CommandContainer {

  constructor(
    public readonly help: HelpCommand = new HelpCommand(),
    public readonly play: PlayCommand = new PlayCommand(),
    public readonly check: CheckCommand = new CheckCommand(),
  ) { }

}
