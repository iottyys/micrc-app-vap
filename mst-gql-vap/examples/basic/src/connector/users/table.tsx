import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import Table from '../../component/antd/table'
import {Tag} from 'antd'

export default () => {
  const store = useContext(RootStoreContext);
  const columns = [
    {title: 'ID', dataIndex: 'id', key: 'id'},
    {title: '姓名', dataIndex: 'name', key: 'name'},
    {title: '年龄', dataIndex: 'age', key: 'age'},
    {title: '性别', dataIndex: 'sex', key: 'sex', render: (sex: boolean) => <Tag color={sex?'green':'red'}>{sex?'男':'女'}</Tag>},
      /*{
      console.log('sex: ', sex)
      return sex;
      }},*/ // ,render: (sex:boolean) =>
    {title: '操作', dataIndex: '', key: 'action'}
  ];
  // store.bind('/userTableComp/column', [], '')
  // console.log('qwe===', store.bind('/users/result/value', [], ''))
  return <Table dataSource={store.bind('/users/result/value', [], '')} columns={columns}
  updateClick={store.userForm.get} deleteClick={store.userForm.remove}/>
}
