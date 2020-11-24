import { Instance } from "mobx-state-tree"
import { QueryUsersModelBase } from "./QueryUsersModel.base"

/* The TypeScript type of an instance of QueryUsersModel */
export interface QueryUsersModelType extends Instance<typeof QueryUsersModel.Type> {}

/* A graphql query fragment builders for QueryUsersModel */
export { selectFromQueryUsers, queryUsersModelPrimitives, QueryUsersModelSelector } from "./QueryUsersModel.base"

/**
 * QueryUsersModel
 */
export const QueryUsersModel = QueryUsersModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
