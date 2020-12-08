/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {UserModel} from "@/stores/models/localhost8000";
import {UserInput} from "@/stores/models/localhost8000/RootStore.base";


const UserParamModel = types.model().named('UsersParam')
  .props({
  });
const UserResultModel = types.model().named('UsersResult')
  .props({
  });

// api名称users构造UserStore
export const UserRemoveStore = MSTGQLStore.named('UserRemoveStore')
  .props({
    loading: types.optional(types.boolean, false),
    endpoint: types.optional(types.late((): any => types.string), 'localhost8000'),
    param: types.optional(types.late((): any => UserParamModel), {}),
    result: types.optional(types.late((): any => UserResultModel), {})
  })
  .actions((self) => ({
    action: (id: string) => {
      const root = getRoot(self);
      // console.log('param:  ', id);
      self.exec([
        {
          type: "api",
          params: {
            changeLoading: (loading: boolean) => {
              self.loading = loading;
            },
            query: 'mutation { MutationUser { remove(id: "' + id + '") } }',
            successCallback: (data: {MutationUser:{remove:{id: string}}})=>{
              const success = data.MutationUser.remove;
              // @ts-ignore
              root.users.action();
            }
          }
        }
      ]);
    }
  }));
