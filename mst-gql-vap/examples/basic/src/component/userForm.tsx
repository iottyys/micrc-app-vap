import React from "react";
import {observer} from "mobx-react";

export default observer(({
  id,
  record,
  reset,
  change,
  save
}: {
  id: string,
  record: any,
  reset: () => {},
  change: () => {},
  save: () => {}
}) => {
  // console.log('record: ', record);
  return <form id={'userForm'+id}>
    <input name="name" value={record['name']} onChange={change} />
    <input type="number" name="age" value={record['age']} onChange={change} />
    <label>男<input type="radio" name="sex" value="1" checked={record['sex']} onChange={change} /></label>
    <label>女<input type="radio" name="sex" value="" checked={!record['sex']} onChange={change} /></label>
    <input type="button" value="Submit" onClick={save} />
    <input type="button" value="Reset" onClick={reset} />
  </form>
});
