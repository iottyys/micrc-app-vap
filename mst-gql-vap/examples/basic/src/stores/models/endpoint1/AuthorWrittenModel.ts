import { Instance } from "mobx-state-tree"
import { AuthorWrittenModelBase } from "./AuthorWrittenModel.base"

/* The TypeScript type of an instance of AuthorWrittenModel */
export interface AuthorWrittenModelType extends Instance<typeof AuthorWrittenModel.Type> {}



/**
 * AuthorWrittenModel
 */
export const AuthorWrittenModel = AuthorWrittenModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
