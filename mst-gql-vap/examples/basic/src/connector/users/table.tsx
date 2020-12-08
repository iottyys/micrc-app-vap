import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import Table from '../../component/antd/table'
import {Tag} from 'antd'
import UserForm from "@/component/userForm";

export default () => {
  const store = useContext(RootStoreContext);
  const columns = [
    {title: 'ID', dataIndex: 'id', key: 'id'},
    {title: '姓名', dataIndex: 'name', key: 'name'},
    {title: '年龄', dataIndex: 'age', key: 'age'},
    {title: '性别', dataIndex: 'sex', key: 'sex', render: (sex: boolean) => <Tag color={sex?'green':'red'}>{sex?'男':'女'}</Tag>},
    {title: '操作', dataIndex: '', key: 'action'}
  ];
  // store.bind('/userTableComp/column', [], '')
  // console.log('qwe===', store.bind('/users/result/value', [], ''))
  return <Table columns={columns}
                // id={store.bind('/userUpdate/param/id', '', '')}
                formData={store.bind('/userUpdate/param', {}, '')}
                // data={store.bind('/userUpdate/param/user', {}, '')}
                dataSource={store.bind('/users/result/value', [], '')}
                updateClick={store.userUpdate.reset}
                deleteClick={store.userRemove.action}
                change={store.userUpdate.change.bind(0, '/userUpdate/param/user/')}
                reset={store.userUpdate.reset}
                cancel={store.userUpdate.cancel}
                saveUpdate={store.userUpdate.action}/>
}
