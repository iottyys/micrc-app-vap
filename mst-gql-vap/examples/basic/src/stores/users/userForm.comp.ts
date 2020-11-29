import {types} from "mobx-state-tree";
import {UserModel} from "@/stores/models/localhost8000";


export const UserFormCompStore = types.model().named('UserFormCompStore')
  .props({
    user: types.union(types.undefined, UserModel)
  });
