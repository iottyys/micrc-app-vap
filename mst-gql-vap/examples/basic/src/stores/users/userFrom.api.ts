/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {UserModel} from "@/stores/models/localhost8000";
import {UserInput} from "@/stores/models/localhost8000/RootStore.base";


const UserParamModel = types.model().named('UsersParam')
  .props({
    // 由选择的执行属性(带有所属type信息MutationUser，field信息addUser，field-args信息user UserModel)构建
    // @ts-ignore
    id: types.union(types.undefined, types.string),
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
      // console.log('saveOrUpdate--start');
      const root = getRoot(self);
      const json = {...self.param.user.toJSON()};
      delete json.__typename;
      // @ts-ignore
      let queryParam;
      delete json.id;
      queryParam = JSON.stringify(json);
      let query, successCallback;
      // @ts-ignore
      Object.keys(json).forEach(k=>queryParam = queryParam.replace(new RegExp('"' + k + '"', 'g'), k));
      if (!self.param.id) {
        query = 'mutation { MutationUser { add(user: ' + queryParam + ') { id name age sex } } }';
        successCallback = (data: {MutationUser:{add: {id: string, name: string, age: number, sex: boolean}}})=>{
          self.result.value = data.MutationUser.add;
          // @ts-ignore
          self.reset();
          // @ts-ignore
          root.users.select();
        }
      } else {
        query = 'mutation { MutationUser { update(id:"'+self.param.id+'",user: ' + queryParam + ') { id name age sex } } }';
        successCallback = (data: {MutationUser:{update:{id: string, name: string, age: number, sex: boolean}}})=>{
          self.result.value = data.MutationUser.update;
          // @ts-ignore
          self.reset();
          // @ts-ignore
          root.users.select();
        }
      }
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
    get: (id: string) => {
      // console.log('self.param-get1: ', self.param)
      self.exec([
        {
          type: "api",
          params: {
            changeLoading: (loading: boolean) => {
              self.loading = loading;
            },
            query: 'query { QueryUsers { findById(id: "' + id + '") { id name age sex } } }',
            successCallback: (data: {QueryUsers:{findById:{id: string, name: string, age: number, sex: boolean}}})=>{
              // @ts-ignore
              self.reset();
              self.param.id = data.QueryUsers.findById.id;
              self.param.user = data.QueryUsers.findById;
              // console.log('====', self.param, data.QueryUsers)
              // console.log('self.param-get2: ', self.param)
            }
          }
        }
      ]);
    },
    reset: () => {
      // console.log('self.param-reset1: ', self.param)
      const userForm = document.getElementById('userForm');
      if (userForm) {
        // @ts-ignore
        userForm.reset();
      }
      // console.log('self.param.user: ', self.param.user);
      if (!self.param.user) {
        self.param.user = UserModel.create({ id: '', name: '', age: 20, sex: true });
      }
      self.param.id = "";
      self.param.user.name = "";
      self.param.user.age = 20;
      self.param.user.sex = true;
      // console.log('self.param.user: ', self.param.user);
      // console.log('self.param-reset2: ', self.param)
    },
    changeAttr: (event: any) => {
      // console.log('self.param-changeAttr1: ', self.param)
      const input = event.target;
      // @ts-ignore
      const curType = UserModel.getChildType(input.name)
      // console.log('curType.name: ', curType.name)
      let val;
      if (curType.name.includes('integer')) {
        val = parseInt(input.value);
      } else if (curType.name.includes('number')) {
        val = parseFloat(input.value);
      } else if (curType.name.includes('boolean')) {
        val = Boolean(input.value);
      } else {
        val = input.value;
      }
      // console.log("user: ", input.name, val, typeof(val))
      self.param.user[input.name] = val;
      // console.log('event: ', event);
      // console.log('event: ', event.target);
      // console.log('self.param-changeAttr1: ', self.param)
    },
    remove: (id: string) => {
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
              self.select();
            }
          }
        }
      ]);
    }
  }));
