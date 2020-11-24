/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthorModel, AuthorModelType } from "./AuthorModel"
import { AuthorModelSelector } from "./AuthorModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: AuthorModelType;
}

/**
 * BookBase
 * auto generated base class for the model BookModel.
 */
export const BookModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Book')
  .props({
    __typename: types.optional(types.literal("Book"), "Book"),
    id: types.identifier,
    title: types.union(types.undefined, types.string),
    author: types.union(types.undefined, MSTGQLRef(types.late((): any => AuthorModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BookModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  author(builder?: string | AuthorModelSelector | ((selector: AuthorModelSelector) => AuthorModelSelector)) { return this.__child(`author`, AuthorModelSelector, builder) }
}
export function selectFromBook() {
  return new BookModelSelector()
}

export const bookModelPrimitives = selectFromBook().title
