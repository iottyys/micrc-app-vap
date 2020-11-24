/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BookModel, BookModelType } from "./BookModel"
import { BookModelSelector } from "./BookModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  books: IObservableArray<BookModelType>;
}

/**
 * QueryBooksBase
 * auto generated base class for the model QueryBooksModel.
 */
export const QueryBooksModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QueryBooks')
  .props({
    __typename: types.optional(types.literal("QueryBooks"), "QueryBooks"),
    books: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => BookModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QueryBooksModelSelector extends QueryBuilder {
  books(builder?: string | BookModelSelector | ((selector: BookModelSelector) => BookModelSelector)) { return this.__child(`books`, BookModelSelector, builder) }
}
export function selectFromQueryBooks() {
  return new QueryBooksModelSelector()
}

export const queryBooksModelPrimitives = selectFromQueryBooks()
