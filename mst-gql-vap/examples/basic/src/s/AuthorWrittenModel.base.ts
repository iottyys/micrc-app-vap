/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AuthorWrittenBase
 * auto generated base class for the model AuthorWrittenModel.
 */
export const AuthorWrittenModelBase = ModelBase
  .named('AuthorWritten')
  .props({
    __typename: types.optional(types.literal("AuthorWritten"), "AuthorWritten"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AuthorWrittenModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromAuthorWritten() {
  return new AuthorWrittenModelSelector()
}

export const authorWrittenModelPrimitives = selectFromAuthorWritten().name
