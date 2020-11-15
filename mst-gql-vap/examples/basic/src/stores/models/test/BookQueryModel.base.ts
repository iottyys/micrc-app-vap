/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BookDtoModel, BookDtoModelType } from "./BookDtoModel"
import { BookPagedModel, BookPagedModelType } from "./BookPagedModel"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  findById: BookDtoModelType;
}

/**
 * BookQueryBase
 * auto generated base class for the model BookQueryModel.
 */
export const BookQueryModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BookQuery')
  .props({
    __typename: types.optional(types.literal("BookQuery"), "BookQuery"),
    books: types.union(types.undefined, types.late((): any => BookPagedModel)),
    findById: types.union(types.undefined, MSTGQLRef(types.late((): any => BookDtoModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))


