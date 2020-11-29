/**
 * api store，包含参数，结果模型
 */
import {getRoot, getPath, resolvePath, types, getEnv, getPropertyMembers} from "mobx-state-tree";

// import { MSTGQLStore } from "mst-gql";
// import { MSTGQLStore } from '../../../../../../mst-gql-vap';
import { MSTGQLStore } from "@/stores/models/MSTGQLStore";
import {UserModel} from "@/stores/models/localhost8000";
import {BookWrittenModel} from "@/stores/models/test";
import user from "@/pages/users";


const UserParamModel = types.model()
  .named('UserParam')
  .props({
    // 由选择的执行属性(带有所属type信息MutationUser，field信息addUser，field-args信息user UserModel)构建
    MutationUser_addUser_user: types.union(types.undefined, types.late((): any => UserModel)),
    QueryUser_users_u: types.union(types.undefined, types.late((): any => UserModel))
  })
const UserResultModel = types.model()
  .named('UserResult')
  .props({
    value: types.union(types.undefined, types.late((): any => UserModel))
  })

// api名称users构造UserStore
export const UserStore = MSTGQLStore
  .named('UserStore')
  .props({
    endpoint: types.optional(types.late((): any => types.string),'localhost8000'),
    param: types.optional(types.late((): any => UserParamModel), {}),
    result: types.optional(types.late((): any => UserResultModel), {})
  })
  .actions(self => ({
    action: (actions: [{ type: string, params: any }]) => {
      /*console.log('self:', self)
      // @ts-ignore
      console.log('root.db.userList: ', root.db.userList);
      // @ts-ignore
      console.log(getPath(root.db.userList))
      console.log("/users: ", resolvePath(root, "/users"))
      console.log("/users/param/MutationUser_addUser_user: ", resolvePath(root, "/users/param/MutationUser_addUser_user"))
      console.log('/users/result/value: ', resolvePath(root, '/users/result/value'))*/
      const endpoints = getEnv(self).endpoints
      const endpoint = getPropertyMembers(self).properties.endpoint.create()

      // 获取client
      const httpClient = endpoints[endpoint].http

      if (!httpClient) {
        console.error("不能为空")
      } else {
        console.log("actions: ", actions)
        const root = getRoot(self)
        console.log('root: ', root)
        if (actions) {
          if (actions[0].type === 'addUser') {
            const user = httpClient.request('mutation { MutationUser { addUser(name:"'+actions[0].params+'") {id name} } }')
            return user;
          }
        } else {
          // @ts-ignore
          let userList: [{id: string, name: string}] = [];
          console.log('httpClient: ', httpClient);
          userList = httpClient.request('query { QueryUsers { users {id name} } }')
          console.log("users: ", userList);
          /*us.then((res: { QueryUsers: { users: [{id: string, name: string}] } }) => {
            console.log(res.QueryUsers.users);
            userList.concat(res.QueryUsers.users);
          }, (r1: any)=>{
            console.error(r1);
          });*/
          return userList;
        }

      }
    }
  }))
  .views(self => ({
    bind: (jsonpath: string, defaultVal: any, jslt: string) => {
      return self.doBind(jsonpath, defaultVal, jslt)
    }
  }))
