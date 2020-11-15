/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AuthorDtoBase
 * auto generated base class for the model AuthorDtoModel.
 */
export const AuthorDtoModelBase = ModelBase
  .named('AuthorDto')
  .props({
    __typename: types.optional(types.literal("AuthorDTO"), "AuthorDTO"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AuthorDtoModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromAuthorDto() {
  return new AuthorDtoModelSelector()
}

export const authorDtoModelPrimitives = selectFromAuthorDto().name
