/**
 * 数据区store，包含区域内的组件store，api store
 * 该数据区内的组件绑定属性的根路径
 * 一个模块可以有一个或多个数据区store
 */
import {getPath, Instance, resolvePath, tryResolve, types} from "mobx-state-tree";
import {BooksStore} from "./books.api";
import {UserStore} from "./user.api";
import {UserModel} from "../models/localhost8000";
import {AuthorDtoModel, AuthorWrittenModel, BookDtoModel, BookWrittenModel} from "../models/endpoint1";

export interface RootStoreType extends Instance<typeof RootStore> {}

// 初始化时，会创建各endpoint的所有模型，创建数据区时，需指定各endpoint的root types用于构建数据库
const DBStore = types.model()
  .named('db')
  .props({
    userList: types.optional(types.array(UserModel), []),
    bookDtos: types.optional(types.map(types.late((): any => BookDtoModel)), {}),
    authorDtos: types.optional(types.map(types.late((): any => AuthorDtoModel)), {}),
    bookWrittens: types.optional(types.map(types.late((): any => BookWrittenModel)), {}),
    authorWrittens: types.optional(types.map(types.late((): any => AuthorWrittenModel)), {}),
    test: types.optional(types.array(types.string), ['123', '345'])
  })

export const RootStore = types.model()
  // 新增数据区时
  .named('RootStore')
  .props({
    // 固定的
    db: types.optional(types.late((): any => DBStore), {}),
    // 每次添加api时，应该在数据文件中记录当前数据区包含的api，根据此信息生成
    books: types.optional(types.late((): any => BooksStore), {}),
    users: types.optional(types.late((): any => UserStore), {}),
  })
  .actions((self) => ({
    action: (actions: [{ type: string, params: any }]) => {
      console.log('root-----------------------start');
      self['books'].exec()
      self.books.action()
      console.log(getPath(self.db.bookDtos))
      console.log(resolvePath(self, "/db/test/1"))
      console.log('root-----------------------end');
    }
  }))
  .views(self => ({
    bind: (jsonpath: string, defaultVal: any, jslt: string) => {
      let retVal = tryResolve(self, jsonpath)
      if (!retVal) {
        return defaultVal
      }
      if (jslt) {
        // retVal = jslt(retVal, jslt)
        throw new Error('unsupported yet!!!')
      }
      return retVal
    }
  }))

