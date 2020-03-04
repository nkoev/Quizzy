import { Injectable } from '../tools/decorators/injectable';
import { CheckCommand } from './check';
import { HelpCommand } from './help';
import { PlayCommand } from './play';

@Injectable()
export class CommandContainer {

  constructor(
    public readonly help: HelpCommand,
    public readonly play: PlayCommand,
    public readonly check: CheckCommand
  ) { }

}
