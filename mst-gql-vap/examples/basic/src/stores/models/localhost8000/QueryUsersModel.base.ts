/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  users: IObservableArray<UserModelType>;
}

/**
 * QueryUsersBase
 * auto generated base class for the model QueryUsersModel.
 */
export const QueryUsersModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QueryUsers')
  .props({
    __typename: types.optional(types.literal("QueryUsers"), "QueryUsers"),
    users: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QueryUsersModelSelector extends QueryBuilder {
  users(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`users`, UserModelSelector, builder) }
}
export function selectFromQueryUsers() {
  return new QueryUsersModelSelector()
}

export const queryUsersModelPrimitives = selectFromQueryUsers()
