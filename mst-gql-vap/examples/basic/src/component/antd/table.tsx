import React from "react";
import { Popconfirm } from 'antd';
import {observer} from "mobx-react";
import UserForm from '../userForm'

export default observer(({
  columns,
  formData,
  dataSource,
  updateClick,
  deleteClick,
  reset,
  cancel,
  change,
  saveUpdate
}: {
  columns: any,
  formData: {id: string,user:{}},
  dataSource: [],
  updateClick: () => {},
  deleteClick: () => {},
  reset: () => {},
  cancel: () => {},
  change: () => {},
  saveUpdate: () => {}
// }) => <Table columns={columns} dataSource={dataSource} />)
}) => {
  // @ts-ignore
  return <table border="1">
    <thead>
      <tr>
        {
          // @ts-ignore
          columns.map(({title,key})=><td key={key}>{title}</td>)
        }
      </tr>
    </thead>
    <tbody>
    {
      dataSource.map((val, i)=>{
        let trCmp;
        if (formData.id && val['id'] === formData.id) {
          trCmp = <td colSpan={5}>
            <UserForm id={val['id']} record={formData.user} change={change} reset={reset.bind(0, val['id'])} save={saveUpdate} />
            <input type="button" value="Cancel" onClick={cancel} />
          </td>;
        } else {
          trCmp = columns.map((col: any, j: number) => <td key={''+i+j}>{
              col['dataIndex']
                ? (typeof(val[col['dataIndex']]) === 'boolean' ? col['render'](val[col['dataIndex']]) : (''+val[col['dataIndex']]))
                : (<>
                  &emsp;<a onClick={updateClick.bind(0, val['id'])}>修改</a>&emsp;|&emsp;
                  <Popconfirm
                    title="Are you sure to delete this record?"
                    onConfirm={() => {
                      // @ts-ignore
                      deleteClick(val['id'])
                    }}
                    okText="Yes"
                    cancelText="No"
                  ><a>删除</a></Popconfirm>&emsp;
                </>)
            }</td>
          );
        }
        return (<tr key={''+i}>{trCmp}</tr>);
      })
    }
    </tbody>
  </table>
});
