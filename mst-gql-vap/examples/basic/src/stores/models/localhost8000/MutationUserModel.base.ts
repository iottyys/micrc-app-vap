/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  addUser: UserModelType;
}

/**
 * MutationUserBase
 * auto generated base class for the model MutationUserModel.
 */
export const MutationUserModelBase = withTypedRefs<Refs>()(ModelBase
  .named('MutationUser')
  .props({
    __typename: types.optional(types.literal("MutationUser"), "MutationUser"),
    addUser: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class MutationUserModelSelector extends QueryBuilder {
  addUser(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`addUser`, UserModelSelector, builder) }
}
export function selectFromMutationUser() {
  return new MutationUserModelSelector()
}

export const mutationUserModelPrimitives = selectFromMutationUser()
