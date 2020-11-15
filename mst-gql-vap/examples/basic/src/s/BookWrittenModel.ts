import { Instance } from "mobx-state-tree"
import { BookWrittenModelBase } from "./BookWrittenModel.base"

/* The TypeScript type of an instance of BookWrittenModel */
export interface BookWrittenModelType extends Instance<typeof BookWrittenModel.Type> {}

/* A graphql query fragment builders for BookWrittenModel */
export { selectFromBookWritten, bookWrittenModelPrimitives, BookWrittenModelSelector } from "./BookWrittenModel.base"

/**
 * BookWrittenModel
 */
export const BookWrittenModel = BookWrittenModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
