import { Instance } from "mobx-state-tree"
import { BookQueryModelBase } from "./BookQueryModel.base"

/* The TypeScript type of an instance of BookQueryModel */
export interface BookQueryModelType extends Instance<typeof BookQueryModel.Type> {}

/* A graphql query fragment builders for BookQueryModel */
export { selectFromBookQuery, bookQueryModelPrimitives, BookQueryModelSelector } from "./BookQueryModel.base"

/**
 * BookQueryModel
 */
export const BookQueryModel = BookQueryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
