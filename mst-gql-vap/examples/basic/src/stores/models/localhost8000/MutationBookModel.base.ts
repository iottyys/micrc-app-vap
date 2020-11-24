/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BookModel, BookModelType } from "./BookModel"
import { BookModelSelector } from "./BookModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  addBook: BookModelType;
}

/**
 * MutationBookBase
 * auto generated base class for the model MutationBookModel.
 */
export const MutationBookModelBase = withTypedRefs<Refs>()(ModelBase
  .named('MutationBook')
  .props({
    __typename: types.optional(types.literal("MutationBook"), "MutationBook"),
    addBook: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => BookModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class MutationBookModelSelector extends QueryBuilder {
  addBook(builder?: string | BookModelSelector | ((selector: BookModelSelector) => BookModelSelector)) { return this.__child(`addBook`, BookModelSelector, builder) }
}
export function selectFromMutationBook() {
  return new MutationBookModelSelector()
}

export const mutationBookModelPrimitives = selectFromMutationBook()
