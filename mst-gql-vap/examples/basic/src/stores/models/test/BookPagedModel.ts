import { Instance } from "mobx-state-tree"
import { BookPagedModelBase } from "./BookPagedModel.base"

/* The TypeScript type of an instance of BookPagedModel */
export interface BookPagedModelType extends Instance<typeof BookPagedModel.Type> {}



/**
 * BookPagedModel
 */
export const BookPagedModel = BookPagedModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
