/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { BookQueryModel, BookQueryModelType } from "./BookQueryModel"
import { BookPagedModel, BookPagedModelType } from "./BookPagedModel"
import { BookDtoModel, BookDtoModelType } from "./BookDtoModel"
import { AuthorDtoModel, AuthorDtoModelType } from "./AuthorDtoModel"
import { BookMutationModel, BookMutationModelType } from "./BookMutationModel"
import { BookWrittenModel, BookWrittenModelType } from "./BookWrittenModel"
import { AuthorWrittenModel, AuthorWrittenModelType } from "./AuthorWrittenModel"



export type BookAddInput = {
  id?: string
  book?: BookInput
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
export const RootStoreBase = withTypedRefs<Refs>()(types.model()
  .named("RootStore")
  .extend(configureStoreMixin([['BookQuery', () => BookQueryModel], ['BookPaged', () => BookPagedModel], ['BookDTO', () => BookDtoModel], ['AuthorDTO', () => AuthorDtoModel], ['BookMutation', () => BookMutationModel], ['BookWritten', () => BookWrittenModel], ['AuthorWritten', () => AuthorWrittenModel]], ['BookDTO', 'AuthorDTO', 'BookWritten', 'AuthorWritten'], "js"))
  .props({
    bookDtos: types.optional(types.map(types.late((): any => BookDtoModel)), {}),
    authorDtos: types.optional(types.map(types.late((): any => AuthorDtoModel)), {}),
    bookWrittens: types.optional(types.map(types.late((): any => BookWrittenModel)), {}),
    authorWrittens: types.optional(types.map(types.late((): any => AuthorWrittenModel)), {})
  })
  .actions(self => ({
  })))
