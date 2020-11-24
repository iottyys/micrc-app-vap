import { Instance } from "mobx-state-tree"
import { MutationBookModelBase } from "./MutationBookModel.base"

/* The TypeScript type of an instance of MutationBookModel */
export interface MutationBookModelType extends Instance<typeof MutationBookModel.Type> {}

/* A graphql query fragment builders for MutationBookModel */
export { selectFromMutationBook, mutationBookModelPrimitives, MutationBookModelSelector } from "./MutationBookModel.base"

/**
 * MutationBookModel
 */
export const MutationBookModel = MutationBookModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
