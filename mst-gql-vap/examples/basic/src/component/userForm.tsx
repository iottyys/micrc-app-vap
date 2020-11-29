import React from "react";
import {observer} from "mobx-react";

export default observer(({
  record,
  add,
  changeAttr,
  saveOrUpdate
}: {
  record: any,
  add: () => {},
  changeAttr: () => {},
  saveOrUpdate: () => {}
}) => {
  // console.log(record, add, saveOrUpdate);
  return <form id="userForm">
    <input type="button" value="Add" onClick={add} />
    ID: [{record['id']}]
    <input name="name" value={record['name']} onChange={changeAttr} />
    <input type="button" value="Submit" onClick={saveOrUpdate} />
  </form>
});
