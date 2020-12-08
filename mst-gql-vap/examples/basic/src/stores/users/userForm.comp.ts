import {getRoot, types} from "mobx-state-tree";
import {UserModel} from "@/stores/models/localhost8000";


export const UserFormCompStore = types.model().named('UserFormCompStore')
  .props({
    name: types.union(types.undefined, types.null, types.string),
    age: types.union(types.undefined, types.null, types.integer),
    sex: types.union(types.undefined, types.null, types.boolean)
  });
