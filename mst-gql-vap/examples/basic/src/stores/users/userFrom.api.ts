/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {UserModel} from "@/stores/models/localhost8000";


const UserParamModel = types.model().named('UsersParam')
  .props({
    // 由选择的执行属性(带有所属type信息MutationUser，field信息addUser，field-args信息user UserModel)构建
    user: types.union(types.undefined, UserModel)
  });
const UserResultModel = types.model().named('UsersResult')
  .props({
    value: types.union(types.undefined, UserModel)
  });

// api名称users构造UserStore
export const UserFormStore = MSTGQLStore.named('UserFormStore')
  .props({
    loading: types.optional(types.boolean, false),
    endpoint: types.optional(types.late((): any => types.string), 'localhost8000'),
    param: types.optional(types.late((): any => UserParamModel), {}),
    result: types.optional(types.late((): any => UserResultModel), {})
  })
  .actions((self) => ({
    afterCreate: () => {
      // @ts-ignore
      self.reset();
    },
    saveOrUpdate: (event: any) => {
      console.log('saveOrUpdate--start');
      const root = getRoot(self);
      const json = {...self.param.user.toJSON()};
      delete json.__typename;
      let queryParam = JSON.stringify(json);
      Object.keys(json).forEach(k=>queryParam = queryParam.replace(new RegExp('"' + k + '"', 'g'), k));
      let query, successCallback;
      if (!self.param.user.id) {
        query = 'mutation { MutationUser { add(user: ' + queryParam + ') { id name } } }';
        successCallback = (data: {MutationUser:{add: {id: string,name: string}}})=>{
          self.result.value = data.MutationUser.add;
          // @ts-ignore
          self.reset();
          // @ts-ignore
          root.users.select();
        }
      } else {
        query = 'mutation { MutationUser { update(user: ' + queryParam + ') { id name } } }';
        successCallback = (data: {MutationUser:{update:{id: string,name: string}}})=>{
          self.result.value = data.MutationUser.update;
          // @ts-ignore
          self.reset();
          // @ts-ignore
          root.users.select();
        }
      }

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
    get: (id: string) => {
      self.exec([
        {
          type: "api",
          params: {
            changeLoading: (loading: boolean) => {
              self.loading = loading;
            },
            query: 'query { QueryUsers { findById(id: "' + id + '") { id name } } }',
            successCallback: (data: {QueryUsers:{findById:{id: string,name: string}}})=>{
              self.result.value = data.QueryUsers.findById;
            }
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
      // console.log('self.param.user: ', self.param.user);
      if (!self.param.user) {
        self.param.user = UserModel.create({ id: '', name: '' });
      }
      self.param.user.id = "";
      self.param.user.name = "";
      // console.log('self.param.user: ', self.param.user);
    },
    changeAttr: (event: any) => {
      const input = event.target;
      self.param.user[input.name] = input.value;
      // console.log('event: ', event);
      // console.log('event: ', event.target);
    }
  }));
