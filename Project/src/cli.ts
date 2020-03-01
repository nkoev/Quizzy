import { CommandContainer } from './commands/commands-container';
import { ArgumentsParser } from './core/arguments-parser.service';
import { ConsolePrinter } from './core/console-printer.service';
import { ICommand } from './types/command';
import { CommandParameters } from './types/command-parameters/command-parameters';

export class CLI {

  constructor(
    private readonly parser: ArgumentsParser = new ArgumentsParser(),
    private readonly printer: ConsolePrinter = new ConsolePrinter(),
    private readonly commandContainer: CommandContainer = new CommandContainer(),
  ) { }
  public async main() {
    const command = this.parser.command as keyof CommandContainer;
    const args: CommandParameters = this.parser.arguments;

    if (this.commandContainer[command] && typeof (this.commandContainer[command] as ICommand).execute === 'function') {
      const executionResult = await (this.commandContainer[command] as ICommand).execute(args);

      if (executionResult.errors) {
        this.printer.print(executionResult.message);
      }
    }

  }
}
