/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {UserModel} from "@/stores/models/localhost8000";
import {UserInput} from "@/stores/models/localhost8000/RootStore.base";
import {UserFormCompStore} from "@/stores/users/userForm.comp";


const UserParamModel = types.model().named('UsersParam')
  .props({
    id: types.union(types.undefined, types.string),
    user: types.optional(types.late((): any => UserFormCompStore), {})
  });
const UserResultModel = types.model().named('UsersResult')
  .props({
    value: types.union(types.undefined, UserModel)
  });

// api名称users构造UserStore
export const UserUpdateStore = MSTGQLStore.named('UserUpdateStore')
  .props({
    loading: types.optional(types.boolean, false),
    endpoint: types.optional(types.late((): any => types.string), 'localhost8000'),
    param: types.optional(types.late((): any => UserParamModel), {}),
    result: types.optional(types.late((): any => UserResultModel), {})
  })
  .actions((self) => ({
    action: (event: any) => {
      // console.log('saveOrUpdate--start');
      const root = getRoot(self);
      // @ts-ignore
      const json = self.param.user.toJSON();
      delete json.__typename;
      // @ts-ignore
      let queryParam;
      delete json.id;
      queryParam = JSON.stringify(json);
      // @ts-ignore
      Object.keys(json).forEach(k=>queryParam = queryParam.replace(new RegExp('"' + k + '"', 'g'), k));
      const query = 'mutation { MutationUser { update(id:"'+self.param.id+'",user: ' + queryParam + ') { id name age sex } } }';
      const successCallback = (data: {MutationUser:{update:{id: string, name: string, age: number, sex: boolean}}})=>{
        self.result.value = data.MutationUser.update;
        // @ts-ignore
        root.users.action();
        // @ts-ignore
        self.cancel();
      };
      // console.log('query: ', query);
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
    cancel: () => {
      self.param.id = undefined;
      self.param.user = UserFormCompStore.create({});
    },
    reset: (id: string) => {
      const userForm = document.getElementById('userForm' + id);
      if (userForm) {
        // @ts-ignore
        userForm.reset();
      }
      self.param.id = id;
      const root = getRoot(self);
      // @ts-ignore
      const user = [].concat(root.users.result.value).find(u => u.id === id).toJSON();
      const editUser = {};
      Object.keys(user).filter(k => !['__typename', 'id'].includes(k)).forEach(k => {
        // @ts-ignore
        editUser[k] = user[k];
      });
      // console.log('user: ', user, editUser)
      self.param.user = UserFormCompStore.create(editUser);
      // console.log(self.param.user);
    }
  }));
