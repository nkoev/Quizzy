import { WikiKeys } from "../../common/wiki-keys";

export type CheckParameters = {
answers?: boolean;
wiki?: keyof typeof WikiKeys;
};
