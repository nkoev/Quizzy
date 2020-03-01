import chalk from 'chalk';
import figlet from 'figlet';
import { ColorType } from '../common/colors';
import { IFormatter } from '../types/core/formatter';

export class ArtFormatter implements IFormatter {

  public format(printable: any, textColor: ColorType = ColorType.White): string {
    return chalk.hex(textColor)(figlet.textSync(printable));
  }
}
