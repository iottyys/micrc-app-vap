import { Instance } from "mobx-state-tree"
import { AddBookInputBase } from "./AddBookInputModel.base"

/* The TypeScript type of an instance of AuthorDtoModel */
export interface AddBookInputModelType extends Instance<typeof AddBookInputModel.Type> {}



/**
 * AuthorDtoModel
 */
export const AddBookInputModel = AddBookInputBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
