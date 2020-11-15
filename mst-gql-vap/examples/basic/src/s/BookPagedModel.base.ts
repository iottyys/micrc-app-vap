/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BookDtoModel, BookDtoModelType } from "./BookDtoModel"
import { BookDtoModelSelector } from "./BookDtoModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  books: IObservableArray<BookDtoModelType>;
}

/**
 * BookPagedBase
 * auto generated base class for the model BookPagedModel.
 */
export const BookPagedModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BookPaged')
  .props({
    __typename: types.optional(types.literal("BookPaged"), "BookPaged"),
    books: types.union(types.undefined, types.array(types.union(types.null, MSTGQLRef(types.late((): any => BookDtoModel))))),
    offset: types.union(types.undefined, types.integer),
    size: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BookPagedModelSelector extends QueryBuilder {
  get offset() { return this.__attr(`offset`) }
  get size() { return this.__attr(`size`) }
  books(builder?: string | BookDtoModelSelector | ((selector: BookDtoModelSelector) => BookDtoModelSelector)) { return this.__child(`books`, BookDtoModelSelector, builder) }
}
export function selectFromBookPaged() {
  return new BookPagedModelSelector()
}

export const bookPagedModelPrimitives = selectFromBookPaged().offset.size
