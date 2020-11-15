import { Instance } from "mobx-state-tree"
import { BookPagedModelBase } from "./BookPagedModel.base"

/* The TypeScript type of an instance of BookPagedModel */
export interface BookPagedModelType extends Instance<typeof BookPagedModel.Type> {}

/* A graphql query fragment builders for BookPagedModel */
export { selectFromBookPaged, bookPagedModelPrimitives, BookPagedModelSelector } from "./BookPagedModel.base"

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
