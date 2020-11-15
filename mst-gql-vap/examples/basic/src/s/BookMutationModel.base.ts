/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BookWrittenModel, BookWrittenModelType } from "./BookWrittenModel"
import { BookWrittenModelSelector } from "./BookWrittenModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  addBook: BookWrittenModelType;
}

/**
 * BookMutationBase
 * auto generated base class for the model BookMutationModel.
 */
export const BookMutationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BookMutation')
  .props({
    __typename: types.optional(types.literal("BookMutation"), "BookMutation"),
    addBook: types.union(types.undefined, MSTGQLRef(types.late((): any => BookWrittenModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BookMutationModelSelector extends QueryBuilder {
  addBook(builder?: string | BookWrittenModelSelector | ((selector: BookWrittenModelSelector) => BookWrittenModelSelector)) { return this.__child(`addBook`, BookWrittenModelSelector, builder) }
}
export function selectFromBookMutation() {
  return new BookMutationModelSelector()
}

export const bookMutationModelPrimitives = selectFromBookMutation()
