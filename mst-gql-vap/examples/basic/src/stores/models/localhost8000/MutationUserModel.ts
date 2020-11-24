import { Instance } from "mobx-state-tree"
import { MutationUserModelBase } from "./MutationUserModel.base"

/* The TypeScript type of an instance of MutationUserModel */
export interface MutationUserModelType extends Instance<typeof MutationUserModel.Type> {}

/* A graphql query fragment builders for MutationUserModel */
export { selectFromMutationUser, mutationUserModelPrimitives, MutationUserModelSelector } from "./MutationUserModel.base"

/**
 * MutationUserModel
 */
export const MutationUserModel = MutationUserModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
