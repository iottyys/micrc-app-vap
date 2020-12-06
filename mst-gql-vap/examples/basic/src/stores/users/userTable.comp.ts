import {types} from "mobx-state-tree";
import {UserModel} from "@/stores/models/localhost8000";


const ColumnModel = types.model().named('ColumnModel')
  .props({
    // 由选择的执行属性(带有所属type信息MutationUser，field信息addUser，field-args信息user UserModel)构建
    title: types.string,
    dataIndex: types.string,
    key: types.string
  });

export const UserTableCompStore = types.model().named('UserTableCompStore')
  .props({
    columns: types.array(ColumnModel),
    dataSource: types.array(UserModel)
  })
  .actions((self) => ({
    afterCreate: () => {
      self.columns.push({title: 'ID', dataIndex: 'id', key: 'id'}, {title: '姓名', dataIndex: 'name', key: 'name'});
    }
  }));
