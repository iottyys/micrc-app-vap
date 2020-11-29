import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import Table from '../../component/antd/table'


export default () => {
  const store = useContext(RootStoreContext);
  const columns = [
    {title: 'ID', dataIndex: 'id', key: 'id'}, {title: '姓名', dataIndex: 'name', key: 'name'}
  ];
  // store.bind('/userTableComp/column', [], '')
  // console.log('qwe===', store.bind('/userTableComp/column', [], ''))
  return <Table dataSource={store.bind('/users/result/value', [], '')} columns={columns} />
}
