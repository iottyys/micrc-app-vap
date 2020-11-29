import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import UserForm from '../../component/userForm'


export default () => {
  const store = useContext(RootStoreContext);
  // @ts-ignore
  // console.log('click---', store.userForm.saveOrUpdate)
  return <UserForm record={store.bind('/userForm/param/user', {}, '')}
                   add={store.bind('/userForm/reset', ()=>{}, '')}
                   saveOrUpdate={store.bind('/userForm/saveOrUpdate', ()=>{}, '')} />
}
