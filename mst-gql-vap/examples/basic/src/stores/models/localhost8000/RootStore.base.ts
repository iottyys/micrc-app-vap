/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { QueryBooksModel, QueryBooksModelType } from "./QueryBooksModel"
import { queryBooksModelPrimitives, QueryBooksModelSelector } from "./QueryBooksModel.base"
import { BookModel, BookModelType } from "./BookModel"
import { bookModelPrimitives, BookModelSelector } from "./BookModel.base"
import { AuthorModel, AuthorModelType } from "./AuthorModel"
import { authorModelPrimitives, AuthorModelSelector } from "./AuthorModel.base"
import { QueryUsersModel, QueryUsersModelType } from "./QueryUsersModel"
import { queryUsersModelPrimitives, QueryUsersModelSelector } from "./QueryUsersModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { MutationBookModel, MutationBookModelType } from "./MutationBookModel"
import { mutationBookModelPrimitives, MutationBookModelSelector } from "./MutationBookModel.base"
import { MutationUserModel, MutationUserModelType } from "./MutationUserModel"
import { mutationUserModelPrimitives, MutationUserModelSelector } from "./MutationUserModel.base"



/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  books: ObservableMap<string, BookModelType>,
  authors: ObservableMap<string, AuthorModelType>,
  users: ObservableMap<string, UserModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryQueryBooks="queryQueryBooks",
queryQueryUsers="queryQueryUsers"
}
export enum RootStoreBaseMutations {
mutateMutationBook="mutateMutationBook",
mutateMutationUser="mutateMutationUser"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['QueryBooks', () => QueryBooksModel], ['Book', () => BookModel], ['Author', () => AuthorModel], ['QueryUsers', () => QueryUsersModel], ['User', () => UserModel], ['MutationBook', () => MutationBookModel], ['MutationUser', () => MutationUserModel]], ['Book', 'Author', 'User'], "js"))
  .props({
    books: types.optional(types.map(types.late((): any => BookModel)), {}),
    authors: types.optional(types.map(types.late((): any => AuthorModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {})
  })
  .actions(self => ({
    queryQueryBooks(variables?: {  }, resultSelector: string | ((qb: QueryBooksModelSelector) => QueryBooksModelSelector) = queryBooksModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ QueryBooks: QueryBooksModelType}>(`query QueryBooks { QueryBooks {
        ${typeof resultSelector === "function" ? resultSelector(new QueryBooksModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryUsers(variables?: {  }, resultSelector: string | ((qb: QueryUsersModelSelector) => QueryUsersModelSelector) = queryUsersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ QueryUsers: QueryUsersModelType}>(`query QueryUsers { QueryUsers {
        ${typeof resultSelector === "function" ? resultSelector(new QueryUsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateMutationBook(variables?: {  }, resultSelector: string | ((qb: MutationBookModelSelector) => MutationBookModelSelector) = mutationBookModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ MutationBook: MutationBookModelType}>(`mutation MutationBook { MutationBook {
        ${typeof resultSelector === "function" ? resultSelector(new MutationBookModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateMutationUser(variables?: {  }, resultSelector: string | ((qb: MutationUserModelSelector) => MutationUserModelSelector) = mutationUserModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ MutationUser: MutationUserModelType}>(`mutation MutationUser { MutationUser {
        ${typeof resultSelector === "function" ? resultSelector(new MutationUserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
