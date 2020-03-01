import { IQuestionGenerator } from '../types/core/question-generator';

export class QuestionGenerator implements IQuestionGenerator {

  public readonly type: string = 'list';

  constructor (
    public readonly message: string,
    public readonly choices: string[],
    public readonly name: string = message
  ) {}
}
