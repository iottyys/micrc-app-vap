/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthorDtoModel, AuthorDtoModelType } from "./AuthorDtoModel"
import { AuthorDtoModelSelector } from "./AuthorDtoModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: AuthorDtoModelType;
}

/**
 * BookDtoBase
 * auto generated base class for the model BookDtoModel.
 */
export const BookDtoModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BookDto')
  .props({
    __typename: types.optional(types.literal("BookDTO"), "BookDTO"),
    author: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AuthorDtoModel))),
    bookName: types.union(types.undefined, types.string),
    id: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BookDtoModelSelector extends QueryBuilder {
  get bookName() { return this.__attr(`bookName`) }
  get id() { return this.__attr(`id`) }
  author(builder?: string | AuthorDtoModelSelector | ((selector: AuthorDtoModelSelector) => AuthorDtoModelSelector)) { return this.__child(`author`, AuthorDtoModelSelector, builder) }
}
export function selectFromBookDto() {
  return new BookDtoModelSelector()
}

export const bookDtoModelPrimitives = selectFromBookDto().bookName
