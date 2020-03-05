import { WikiKeywords } from '../../common/wiki-keywords';

export type CheckParameters = {
  answers?: boolean;
  wiki?: keyof typeof WikiKeywords;
};
