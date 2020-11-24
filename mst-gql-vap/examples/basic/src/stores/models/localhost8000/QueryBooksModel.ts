import { Instance } from "mobx-state-tree"
import { QueryBooksModelBase } from "./QueryBooksModel.base"

/* The TypeScript type of an instance of QueryBooksModel */
export interface QueryBooksModelType extends Instance<typeof QueryBooksModel.Type> {}

/* A graphql query fragment builders for QueryBooksModel */
export { selectFromQueryBooks, queryBooksModelPrimitives, QueryBooksModelSelector } from "./QueryBooksModel.base"

/**
 * QueryBooksModel
 */
export const QueryBooksModel = QueryBooksModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
