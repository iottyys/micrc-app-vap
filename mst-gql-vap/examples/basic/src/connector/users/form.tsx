import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import UserForm from '../../component/userForm'


export default () => {
  const store = useContext(RootStoreContext);
  return <UserForm id={store.bind('/userForm/param/id', '', '')}
                   record={store.bind('/userForm/param/user', {}, '')}
                   age={store.bind('/userForm/param/user/age', 0, '')}
                   name={store.bind('/userForm/param/user/name', '', '')}
                   sex={store.bind('/userForm/param/user/sex', false, '')}
                   add={store.userForm.reset}
                   changeAttr={store.userForm.changeAttr}
                   saveOrUpdate={store.userForm.saveOrUpdate} />
}
