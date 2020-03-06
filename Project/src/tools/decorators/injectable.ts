import { Class } from '../../types/class-type';

// tslint:disable-next-line: variable-name
export const Injectable = (): (target: Class<any>) => void =>
  (target: Class<any>) => {
    // For debugging and tracing injectables only
    // Console.log(`${target.name} is now injectable`);
  };
