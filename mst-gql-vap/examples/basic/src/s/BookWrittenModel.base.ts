/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthorWrittenModel, AuthorWrittenModelType } from "./AuthorWrittenModel"
import { AuthorWrittenModelSelector } from "./AuthorWrittenModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: AuthorWrittenModelType;
}

/**
 * BookWrittenBase
 * auto generated base class for the model BookWrittenModel.
 */
export const BookWrittenModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BookWritten')
  .props({
    __typename: types.optional(types.literal("BookWritten"), "BookWritten"),
    author: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AuthorWrittenModel))),
    bookName: types.union(types.undefined, types.string),
    id: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BookWrittenModelSelector extends QueryBuilder {
  get bookName() { return this.__attr(`bookName`) }
  get id() { return this.__attr(`id`) }
  author(builder?: string | AuthorWrittenModelSelector | ((selector: AuthorWrittenModelSelector) => AuthorWrittenModelSelector)) { return this.__child(`author`, AuthorWrittenModelSelector, builder) }
}
export function selectFromBookWritten() {
  return new BookWrittenModelSelector()
}

export const bookWrittenModelPrimitives = selectFromBookWritten().bookName
