/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AuthorBase
 * auto generated base class for the model AuthorModel.
 */
export const AuthorModelBase = ModelBase
  .named('Author')
  .props({
    __typename: types.optional(types.literal("Author"), "Author"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AuthorModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromAuthor() {
  return new AuthorModelSelector()
}

export const authorModelPrimitives = selectFromAuthor().name
