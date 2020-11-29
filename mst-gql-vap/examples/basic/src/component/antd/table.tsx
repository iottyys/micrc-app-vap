import React from "react";
import { Table } from 'antd';
import {observer} from "mobx-react";

export default observer(({
  columns,
  dataSource
}: {
  columns: any,
  dataSource: []
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
        return (<tr key={''+i}>
          {columns.map((col: any, j: number) => <td key={''+i+j}>{val[col['dataIndex']]}</td>)}
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
