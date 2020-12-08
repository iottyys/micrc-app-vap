/**
 * api store，包含参数，结果模型
 */
import {getPath, getRoot, resolvePath, types} from "mobx-state-tree";

import {MSTGQLStore} from "@/stores/models/MSTGQLStore";
import {QueryUsersModel, RootStore, selectFromQueryUsers, UserModel} from "@/stores/models/localhost8000";


const UsersParamModel = types.model().named('UsersParam')
  .props({
    // 由选择的执行属性(带有所属type信息MutationUser，field信息addUser，field-args信息user UserModel)构建
    query: types.optional(QueryUsersModel, {})
  });
const UsersResultModel = types.model().named('UsersResult')
  .props({
    value: types.array(UserModel)
  });

// api名称users构造UserStore
export const UsersStore = MSTGQLStore.named('UsersStore')
  .props({
    loading: types.optional(types.boolean, false),
    endpoint: types.optional(types.late((): any => types.string), 'localhost8000'),
    param: types.optional(types.late((): any => UsersParamModel), {}),
    result: types.optional(types.late((): any => UsersResultModel), {})
  })
  .actions((self) => ({
    afterCreate: () => {
      // @ts-ignore
      self.action();
    },
    action: () => {
      // console.log('UsersStore:  ', self);
      // console.log(selectFromQueryUsers().users())

      self.exec([
        {
          type: "api",
          params: {
            changeLoading: (loading: boolean) => {
              self.loading = loading;
            },
            query: 'query { QueryUsers { users {id name age sex} } }',
            successCallback: (data: {QueryUsers:{users:[{id: string,name: string,age:number,sex:boolean}]}})=>{
              self.result.value = data.QueryUsers.users;
              // console.log('UsersStore:  ', self);
            }
          }
        }
      ]);
    }
  }));
