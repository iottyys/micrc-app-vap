import { Instance } from "mobx-state-tree"
import { AuthorDtoModelBase } from "./AuthorDtoModel.base"

/* The TypeScript type of an instance of AuthorDtoModel */
export interface AuthorDtoModelType extends Instance<typeof AuthorDtoModel.Type> {}



/**
 * AuthorDtoModel
 */
export const AuthorDtoModel = AuthorDtoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
