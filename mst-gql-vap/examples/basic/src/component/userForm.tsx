import React from "react";
import {observer} from "mobx-react";

export default observer(({
  id,
  record,
  name,
  age,
  sex,
  add,
  changeAttr,
  saveOrUpdate
}: {
  id: string,
  record: any,
  name: string,
  age: number,
  sex: boolean,
  add: () => {},
  changeAttr: () => {},
  saveOrUpdate: () => {}
}) => {
  console.log('-----------record: ', record);
  console.log('-----------id: ', id);
  console.log('-----------name: ', name);
  return <form id="userForm">
    <input type="button" value="Add" onClick={add} />
    ID: [{id}]
    <input name="name" value={record['name']} onChange={changeAttr} />
    <input type="number" name="age" value={record['age']} onChange={changeAttr} />
    <label>男<input type="radio" name="sex" value="true" checked={record['sex']} onChange={changeAttr} /></label>
    <label>女<input type="radio" name="sex" value="false" checked={!record['sex']} onChange={changeAttr} /></label>
    <input type="button" value="Submit" onClick={saveOrUpdate} />
  </form>
});
