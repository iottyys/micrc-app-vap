/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { BookQueryModel, BookQueryModelType } from "./BookQueryModel"
import { bookQueryModelPrimitives, BookQueryModelSelector } from "./BookQueryModel.base"
import { BookPagedModel, BookPagedModelType } from "./BookPagedModel"
import { bookPagedModelPrimitives, BookPagedModelSelector } from "./BookPagedModel.base"
import { BookDtoModel, BookDtoModelType } from "./BookDtoModel"
import { bookDtoModelPrimitives, BookDtoModelSelector } from "./BookDtoModel.base"
import { AuthorDtoModel, AuthorDtoModelType } from "./AuthorDtoModel"
import { authorDtoModelPrimitives, AuthorDtoModelSelector } from "./AuthorDtoModel.base"
import { BookMutationModel, BookMutationModelType } from "./BookMutationModel"
import { bookMutationModelPrimitives, BookMutationModelSelector } from "./BookMutationModel.base"
import { BookWrittenModel, BookWrittenModelType } from "./BookWrittenModel"
import { bookWrittenModelPrimitives, BookWrittenModelSelector } from "./BookWrittenModel.base"
import { AuthorWrittenModel, AuthorWrittenModelType } from "./AuthorWrittenModel"
import { authorWrittenModelPrimitives, AuthorWrittenModelSelector } from "./AuthorWrittenModel.base"



export type BookAddInput = {
  id?: string
  book?: BookAddInput
}
export type BookInput = {
  authorName: string
  bookName: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  bookDtos: ObservableMap<string, BookDtoModelType>,
  authorDtos: ObservableMap<string, AuthorDtoModelType>,
  bookWrittens: ObservableMap<string, BookWrittenModelType>,
  authorWrittens: ObservableMap<string, AuthorWrittenModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryBookQuery="queryBookQuery"
}
export enum RootStoreBaseMutations {
mutateBookMutation="mutateBookMutation"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['BookQuery', () => BookQueryModel], ['BookPaged', () => BookPagedModel], ['BookDTO', () => BookDtoModel], ['AuthorDTO', () => AuthorDtoModel], ['BookMutation', () => BookMutationModel], ['BookWritten', () => BookWrittenModel], ['AuthorWritten', () => AuthorWrittenModel]], ['BookDTO', 'AuthorDTO', 'BookWritten', 'AuthorWritten'], "js"))
  .props({
    bookDtos: types.optional(types.map(types.late((): any => BookDtoModel)), {}),
    authorDtos: types.optional(types.map(types.late((): any => AuthorDtoModel)), {}),
    bookWrittens: types.optional(types.map(types.late((): any => BookWrittenModel)), {}),
    authorWrittens: types.optional(types.map(types.late((): any => AuthorWrittenModel)), {})
  })
  .actions(self => ({
    queryBookQuery(variables?: {  }, resultSelector: string | ((qb: BookQueryModelSelector) => BookQueryModelSelector) = bookQueryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ bookQuery: BookQueryModelType}>(`query bookQuery { bookQuery {
        ${typeof resultSelector === "function" ? resultSelector(new BookQueryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateBookMutation(variables?: {  }, resultSelector: string | ((qb: BookMutationModelSelector) => BookMutationModelSelector) = bookMutationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ bookMutation: BookMutationModelType}>(`mutation bookMutation { bookMutation {
        ${typeof resultSelector === "function" ? resultSelector(new BookMutationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
