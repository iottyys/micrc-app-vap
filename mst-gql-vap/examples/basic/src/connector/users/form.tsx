import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import UserForm from '../../component/userForm'


export default () => {
  const store = useContext(RootStoreContext);
  return <UserForm record={store.bind('/userForm/param/user', {}, '')}
                   add={store.userForm.reset}
                   changeAttr={store.userForm.changeAttr}
                   saveOrUpdate={store.userForm.saveOrUpdate} />
}
