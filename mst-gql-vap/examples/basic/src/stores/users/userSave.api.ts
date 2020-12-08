/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {MutationUserModel, UserModel} from "@/stores/models/localhost8000";
import {UserFormCompStore} from "@/stores/users/userForm.comp";


const MutationUser = types.model().named('MutationUser')
  .props({
    MutationUser: UserFormCompStore
  });

const UserParamModel = types.model().named('UsersParam')
  .props({
    mutation: types.optional(types.late((): any => MutationUserModel), {}),
    user: types.optional(types.late((): any => UserFormCompStore), {})
  });
const UserResultModel = types.model().named('UsersResult')
  .props({
    value: types.union(types.undefined, UserModel)
  });

// api名称users构造UserStore
export const UserSaveStore = MSTGQLStore.named('UserSaveStore')
  .props({
    loading: types.optional(types.boolean, false),
    endpoint: types.optional(types.string, 'localhost8000'),
    param: types.optional(types.late((): any => UserParamModel), {}),
    result: types.optional(types.late((): any => UserResultModel), {})
  })
  .actions((self) => ({
    afterCreate: () => {
      // @ts-ignore
      self.reset();
    },
    action: () => {
      // console.log('saveOrUpdate--start');
      const root = getRoot(self);
      // @ts-ignore
      const json = self.param.user.toJSON();
      delete json.__typename;
      // @ts-ignore
      let queryParam;
      queryParam = JSON.stringify(json);
      // @ts-ignore
      Object.keys(json).forEach(k=>queryParam = queryParam.replace(new RegExp('"' + k + '"', 'g'), k));
      const query = 'mutation { MutationUser { add(user: ' + queryParam + ') { id name age sex } } }';
      const successCallback = (data: {MutationUser:{add: {id: string, name: string, age: number, sex: boolean}}})=>{
          self.result.value = data.MutationUser.add;
          // @ts-ignore
          self.reset();
          // @ts-ignore
          root.users.action();
        };
      console.log('query: ', query);
      self.exec([
        {
          type: "api",
          params: {
            changeLoading: (loading: boolean) => {
              self.loading = loading;
            },
            query,
            successCallback
          }
        }
      ]);
    },
    reset: () => {
      const userForm = document.getElementById('userForm');
      if (userForm) {
        // @ts-ignore
        userForm.reset();
      }
      if (!self.param.user) {
        self.param.user = UserFormCompStore.create({ name: '', age: 0, sex: true });
      }
    }
  }));
