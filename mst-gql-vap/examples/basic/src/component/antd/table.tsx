import React from "react";
import { Table } from 'antd';
import {observer} from "mobx-react";

export default observer(({
  columns,
  dataSource,
  updateClick,
  deleteClick
}: {
  columns: any,
  dataSource: [],
  updateClick: () => {},
  deleteClick: () => {}
// }) => <Table columns={columns} dataSource={dataSource} />)
}) => {
  // console.log(columns.map((col: any, j: number) => JSON.stringify(col)))
  // @ts-ignore
  // console.log(dataSource.map(JSON.stringify))
  // console.log(dataSource.map((val, i)=> columns.map((col: any, j: number) => col['dataIndex'] ? val[col['dataIndex']] : '修改|删除')))
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
        return (<tr key={''+i}>
          {columns.map((col: any, j: number) => <td key={''+i+j}>{
            col['dataIndex']
              ? (typeof(val[col['dataIndex']]) === 'boolean' ? col['render'](val[col['dataIndex']]) : (''+val[col['dataIndex']]))
              : (<>
                <a onClick={updateClick.bind(val, val['id'])}>修改</a>|<a onClick={deleteClick.bind(val, val['id'])}>删除</a>
              </>)
          }</td>)}
        </tr>);
      })
    }
    </tbody>
  </table>
});

/*{
  records.map((row: any, i: number)=>{
    return <tr key={i}>{row.map((col: any, j: number)=><td key={i+j}>{col}</td>)}</tr>
  })
}*/

/*{
  dataSource.map((val, i)=>{
    return (<tr key={''+i}>
      {columns.map((col: any, j: number) => <td key={''+i+j}>{val[col['dataIndex']]}</td>)}
    </tr>);
  })
}*/
