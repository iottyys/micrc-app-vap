import {MSTGQLObject} from "mst-gql";
import {types} from "mobx-state-tree";

export const AddBookInputBase = MSTGQLObject
  .named('AddBookInput')
  .props({
    id: types.identifier,
    authorName: types.string,
    bookName: types.string
  })
