import { Instance } from "mobx-state-tree"
import { BookMutationModelBase } from "./BookMutationModel.base"

/* The TypeScript type of an instance of BookMutationModel */
export interface BookMutationModelType extends Instance<typeof BookMutationModel.Type> {}

/* A graphql query fragment builders for BookMutationModel */
export { selectFromBookMutation, bookMutationModelPrimitives, BookMutationModelSelector } from "./BookMutationModel.base"

/**
 * BookMutationModel
 */
export const BookMutationModel = BookMutationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
