import { IQuestionGenerator } from '../types/core/question-generator';

export class QuestionGenerator implements IQuestionGenerator {

  // tslint:disable-next-line: no-reserved-keywords
  public readonly type: string = 'list';
  public readonly message: string = this.name;

  constructor(
    public readonly name: string,
    public readonly choices: string[],
  ) { }
}
