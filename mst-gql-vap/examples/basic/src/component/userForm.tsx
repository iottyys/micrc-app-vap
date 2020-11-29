import React from "react";
import {observer} from "mobx-react";

export default observer(({
  record,
  add,
  saveOrUpdate
}: {
  record: any,
  add: () => {}
  saveOrUpdate: () => {}
}) => {
  // console.log(record, add, saveOrUpdate);
  return <div>
    <input type="button" value="Add" onClick={add} />
    <input value={record['id']} readOnly={true} />
    <input value={record['name']} />
    <input type="button" value="Submit" onClick={saveOrUpdate} />
  </div>
});
